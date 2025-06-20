import { prisma } from '@/lib/prisma' // ✅ Use the shared Prisma client

export async function GET() {
  try {
    const count = await prisma.user.count()
    return new Response(JSON.stringify({ count }), { status: 200 })
  } catch (error) {
    console.error('Error counting users:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}
