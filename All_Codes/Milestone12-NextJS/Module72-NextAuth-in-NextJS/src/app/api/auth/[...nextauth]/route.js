import { dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// const userList = [
//   {
//     name: 'hablu',
//     password: '1234'
//   },
//   {
//     name: 'dablu',
//     password: '4567'
//   },
//   {
//     name: 'kablu',
//     password: '8901'
//   },
//   {
//     name: 'kablu',
//     password: '8901'
//   },
// ]

export const authOptions = {
  //? Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      //? Sign in with {name} button
      name: "Email & Password",

      //? form input fields for login
      credentials: {
        email: { label: "email", type: "email", placeholder: "Enter Email" },
        password: { label: "Password", type: "password", placeholder: "****" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        //? find the user from to connect db
        // const user = userList.find(u=> u.name === username)
        const user = await dbConnect("nextAuthUserCollectionDb").findOne({
          email,
        });
        //? if user not found send null
        if (!user) {
          return null;
        }
        //? match the password
        const isPasswordOk = await bcrypt.compare(password, user.password);
        //? if password match return the user object
        if (isPasswordOk) {
          return user;
        }
        //? my own login logic
        return null;
      },
    }),
    //? ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      if(token) {
        session.role = token.role
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if(user) {
        token.email = user.email
        token.role = user.role
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
