export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 })
    }

    // Temporarily skip sending email
    console.log('📩 Contact form message received:', { name, email, subject, message })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Server error in contact form:', error)
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
