import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session, User } from "next-auth";

export const options: AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        if (credentials == null) return null;
        const email = credentials.email;
        const password = credentials.password;
        try {
          const response = await fetch(
            "https://akil-backend.onrender.com/login",
            {
              method: "POST",
              body: JSON.stringify({ email, password }),
              headers: { "Content-Type": "application/json" },
            }
          );
          const user = await response.json();
          if (response.status === 200) {
            const resp = user.data;
            return resp;
          } else {
            throw new Error("user not found");
          }
        } catch (error) {
          throw new Error("check crendetials");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User | null }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        const customSession = session as Session;
        customSession.user!.accessToken = token.accessToken;
        customSession.user!.refreshToken = token.refreshToken;
        customSession.user!.name = token.name!;
        customSession.user!.email = token.email!;
        session = customSession;
      }
      return session;
    },
  },
};
