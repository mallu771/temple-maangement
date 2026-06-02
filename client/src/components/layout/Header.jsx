import {
  Bell,
  UserCircle
} from "lucide-react"

function Header() {
  const logout = () => {
    localStorage.removeItem("token")
    window.location.href = "/login"
  }

  return (
    <div className="bg-white shadow-sm border-b px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          Shree MahaLaxmi Prasanna Temple
        </h1>

        <p className="text-gray-500 text-sm">
          Welcome back to the Temple
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={22} />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        <div className="flex items-center gap-2">
          <UserCircle size={32} />
<button
  onClick={() =>
    (window.location.href = "/logout")
  }
  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
>
  Logout
</button>
        </div>
      </div>
    </div>
  )
}

export default Header