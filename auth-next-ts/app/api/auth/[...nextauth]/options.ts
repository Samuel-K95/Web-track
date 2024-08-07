import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { User, Session } from "next-auth";

export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: "email", type: "email", placeholder:"jdoe@gmail.com"},
                password: {label: "password", type:"password"}
            },
            async authorize(credentials, req) {
                const res = await fetch("https://akil-backend.onrender.com/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: {"Content-Type": "application/json"}
                })

                const user = await res.json()

                if (res.ok && user){
                    return user
                }
                return null
            }
        })
    ],
    session: { strategy: "jwt" },

    callbacks: {
        async jwt({ token, user}: {token: JWT, user? : User | null}){
            token.name = user?.name
            token.email = user?.email
            return token
        },
        async session({session, token}: {session: Session, token: JWT}){
            session.user!.email = token.email
            session.user!.name = token.name
            return session
        },
        async redirect({url, baseUrl} : {url: string, baseUrl: string}){
            return url
        }
    },
};