import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
    providers:[
        CredentialsProvider({
    name: 'email',
    credentials: {
      username: { label: "Username", type: "text", placeholder: "vansh" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const username = credentials?.username;
      const password = credentials?.password;
        const user = {
            username:"vansh",
            password:"123",
            id:"2"
        }
        if(user){
            return user;
        }else{
            return null;
        }
  }}),
   GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }) ]
}