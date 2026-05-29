import {
  Link,
  useLocation
} from "react-router-dom"

import {
  ChevronRight,
  Home
} from "lucide-react"

function Breadcrumbs() {
  const location = useLocation()

  const pathnames = location.pathname
    .split("/")
    .filter(x => x)

  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-blue-500"
      >
        <Home size={16} />
        Home
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames
          .slice(0, index + 1)
          .join("/")}`

        const isLast =
          index === pathnames.length - 1

        return (
          <div
            key={to}
            className="flex items-center gap-2"
          >
            <ChevronRight size={16} />

            {isLast ? (
              <span className="text-black font-medium capitalize">
                {value}
              </span>
            ) : (
              <Link
                to={to}
                className="hover:text-blue-500 capitalize"
              >
                {value}
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrumbs