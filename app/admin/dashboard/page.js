import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { PrismaClient } from '@prisma/client'

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)
  const prisma = new PrismaClient()

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg font-semibold">Unauthorized. Please log in.</p>
      </div>
    )
  }

  const messages = await prisma.message.findMany({ orderBy: { createdAt: 'desc' } })
  const totalMessages = await prisma.message.count()
  const recentMessage = messages[0]

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gold">Admin Dashboard</h1>
        <form action="/api/auth/signout" method="post">
          <button
            type="submit"
            className="text-sm text-red-600 hover:underline"
          >
            Logout
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black text-white p-4 rounded shadow">
          <h3 className="text-lg">Total Messages</h3>
          <p className="text-2xl font-bold">{totalMessages}</p>
        </div>
        <div className="bg-gold text-black p-4 rounded shadow">
          <h3 className="text-lg">Last Received</h3>
          <p className="text-md">{recentMessage?.subject || 'N/A'}</p>
          <p className="text-sm text-gray-700">{recentMessage?.email}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <a
          href="/exports/messages.csv"
          download
          className="bg-black text-white px-4 py-2 rounded hover:bg-gold hover:text-black transition"
        >
          Export Messages CSV
        </a>
      </div>

      <table className="w-full table-auto border text-sm">
        <thead>
          <tr className="bg-black text-white">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Message</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg.id} className="odd:bg-gray-100 even:bg-white">
              <td className="p-2 border">{msg.name}</td>
              <td className="p-2 border">{msg.email}</td>
              <td className="p-2 border">{msg.subject}</td>
              <td className="p-2 border">{msg.body}</td>
              <td className="p-2 border">{new Date(msg.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
