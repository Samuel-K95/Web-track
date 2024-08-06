import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { User, Session } from "next-auth";
import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";

export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                name: { label: "Name", type: "text", placeholder: "John Doe"},
                email: {label: "email", type: "email", placeholder:"jdoe@gmail.com"},
                password: {label: "password", type:"password"}
            },
            async authorize(credentials, req) {
                const res = await fetch("endpoint", {
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

    callbacks: {
        async jwt({ token, user}: {token: JWT, user? : User | null}){
            return token
        },
        async session({session, token}: {session: Session, token: JWT}){
            return session;
        },
    },
};

const handler = NextAuth(options)

export{ handler as GET, handler as POST}