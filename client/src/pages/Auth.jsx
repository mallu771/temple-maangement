import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Auth() {
  const navigate = useNavigate()

  const [isLogin, setIsLogin] =
    useState(true)

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: ""
    })

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  )

  const [error, setError] = useState("")
  const [success, setSuccess] =
    useState("")

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // REGISTER
  const handleRegister = () => {
    const existingUser = users.find(
      user =>
        user.email === formData.email
    )

    if (existingUser) {
      setError("User already exists")
      setSuccess("")
      return
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    }

    const updatedUsers = [
      ...users,
      newUser
    ]

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    )

    setUsers(updatedUsers)

    setSuccess(
      "Registration successful"
    )

    setError("")

    setFormData({
      name: "",
      email: "",
      password: ""
    })

    setIsLogin(true)
  }

  // LOGIN
  const handleLogin = () => {
    const validUser = users.find(
      user =>
        user.email === formData.email &&
        user.password ===
          formData.password
    )

    if (!validUser) {
      setError(
        "Invalid email or password"
      )

      setSuccess("")
      return
    }

    localStorage.setItem(
      "token",
      "demo-token"
    )

    localStorage.setItem(
      "currentUser",
      JSON.stringify(validUser)
    )

    navigate("/")
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (isLogin) {
      handleLogin()
    } else {
      handleRegister()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">
          {isLogin
            ? "Login"
            : "Register"}
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Welcome to Admin Dashboard
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-600 p-3 rounded-lg mb-4">
            {success}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {!isLogin && (
            <div>
              <label className="block mb-2 text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
                required
              />
            </div>
          )}

          <div>
            <label className="block mb-2 text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
              required
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
            {isLogin
              ? "Login"
              : "Register"}
          </button>
        </form>

        <div className="mt-5 text-center">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => {
                  setIsLogin(false)
                  setError("")
                  setSuccess("")
                }}
                className="text-blue-600 font-medium"
              >
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => {
                  setIsLogin(true)
                  setError("")
                  setSuccess("")
                }}
                className="text-blue-600 font-medium"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Auth