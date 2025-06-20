import { prisma } from '@/lib/prisma' // ✅ Use shared Prisma instance
import bcrypt from 'bcrypt'

export async function POST(req) {
  try {
    const { email, password, confirmPassword, secretCode } = await req.json()

    if (!email || !password || !confirmPassword || !secretCode)
      return new Response("Missing fields", { status: 400 })

    if (secretCode !== process.env.ADMIN_SECRET_CODE)
      return new Response("Invalid secret code", { status: 401 })

    if (password !== confirmPassword)
      return new Response("Passwords do not match", { status: 400 })

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser)
      return new Response("User already exists", { status: 409 })

    const adminCount = await prisma.user.count()
    if (adminCount >= 3)
      return new Response("Admin registration limit reached (3 accounts only)", { status: 403 })

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: "admin",
      },
    })

    return new Response("Admin created", { status: 201 })
  } catch (error) {
    console.error("Registration error:", error)
    return new Response("Server error", { status: 500 })
  }
}
