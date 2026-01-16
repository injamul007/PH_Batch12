import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const userList = [
  {
    name: 'hablu',
    password: '1234'
  },
  {
    name: 'dablu',
    password: '4567'
  },
  {
    name: 'kablu',
    password: '8901'
  }
]

export const authOptions = {
  //? Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      //? Sign in with {name} button
      name: "Credentials",
      
      //? form input fields for login
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "****" },
        secretCode: { label: "Secret Code", type: "number", placeholder: "enter code" },
      },
      async authorize(credentials, req) {
        const {username, password, secretCode} = credentials;
        //? find the user
        const user = userList.find(u=> u.name === username)
        //? if user not found send null
        if(!user){
          return null
        }
        //? match the password
        const isPasswordValid = user.password === password;
        //? if password match return the user object
        if(isPasswordValid) {
          return user;
        }
        //? my own login logic
        // return null;
      },
    }),
    //? ...add more providers here
  ],
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };