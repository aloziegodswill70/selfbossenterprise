import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prisma" // ✅ Use shared prisma client

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })
        if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
          return null
        }
        return { id: user.id, email: user.email }
      }
    })
  ],
  pages: {
    signIn: "/admin/login"
  }
})

export { handler as GET, handler as POST }
