"use server"

import { dbConnect } from "@/lib/dbConnect"
import bcrypt from "bcryptjs"

export const postUser = async(payload) => {
  console.log(payload)

  //? Validation to check the payload has value or not
  if(!payload.email || !payload.password || Object.keys(payload).length===0) {
    return{
      status: false,
      message: "payload has no data"
    }
  }

  //? 1 - check user exits or not

  const isExits = await dbConnect("nextAuthUserCollectionDb").findOne({email: payload.email})

  if(isExits) {
    return {
      status: false,
      message: "user already Exits"
    }
  }

  const hashPassword = await bcrypt.hash(payload.password, 10);
  console.log(hashPassword)

  //? 2 - create new user

  const newUser = {
    ...payload,
    createdAt: new Date().toISOString(),
    role: "user",
    password: hashPassword,
  }
  console.log(newUser)

  //? 3 - send user to database

  const result = await dbConnect("nextAuthUserCollectionDb").insertOne(newUser)

  if(result.acknowledged) {
    return{
      status: true,
      message: `user created with ${result.insertedId.toString()}`
    }
  } else{
    return{
      status: false,
      message: "something went wrong!. try again"
    }
  }

}