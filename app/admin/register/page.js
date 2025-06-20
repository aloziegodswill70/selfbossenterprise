'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminRegister() {
  const router = useRouter()
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    secretCode: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [showSecret, setShowSecret] = useState(false)

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [adminLimitReached, setAdminLimitReached] = useState(false)

  // Check if admin registration is allowed
  useEffect(() => {
    const checkAdminCount = async () => {
      const res = await fetch('/api/auth/admin-count')
      const data = await res.json()
      if (data.count >= 3) {
        setAdminLimitReached(true)
      }
    }
    checkAdminCount()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.status === 403) {
      setError("Admin limit reached. No more registrations allowed.")
      return
    }

    if (res.status === 401) {
      setError("Invalid secret code.")
      return
    }

    if (res.ok) {
      setSuccess('Admin account created! You can now log in.')
      setForm({ email: '', password: '', confirmPassword: '', secretCode: '' })
      setTimeout(() => router.push('/admin/login'), 2000)
    } else {
      const data = await res.text()
      setError(data || 'Something went wrong.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gold text-center">Admin Register</h2>

        {adminLimitReached ? (
          <p className="text-red-500 text-center">
            Admin registration is closed. The maximum of 3 accounts has been reached.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
            {success && <p className="text-green-600 mb-4 text-sm">{success}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded"
              required
            />

            {/* Password */}
            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-3 border rounded pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative mb-4">
              <input
                type={showConfirm ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border rounded pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirm ? '🙈' : '👁️'}
              </button>
            </div>

            {/* Secret Code */}
            <div className="relative mb-6">
              <input
                type={showSecret ? 'text' : 'password'}
                name="secretCode"
                placeholder="Secret Code"
                value={form.secretCode}
                onChange={handleChange}
                className="w-full p-3 border rounded pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowSecret(!showSecret)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showSecret ? '🙈' : '👁️'}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-black py-3 rounded hover:bg-black hover:text-white transition"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
