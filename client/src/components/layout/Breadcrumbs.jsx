import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { menuItems } from "./../../jsFiles/menuConfig";

// 🔍 find breadcrumb path recursively
function findBreadcrumbs(menu, pathname) {
  for (let item of menu) {
    if (item.path === pathname) {
      return [item];
    }

    if (item.children) {
      const child = findBreadcrumbs(
        item.children,
        pathname
      );

      if (child) {
        return [item, ...child];
      }
    }
  }
  return null;
}

export default function Breadcrumbs() {
  const location = useLocation();
console.log("location:", location);
  const breadcrumbs =
    findBreadcrumbs(menuItems, location.pathname) ||
    [];
  
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-blue-500"
      >
        <Home size={16} />
        Home
      </Link>

      {breadcrumbs.map((item, index) => {
        const isLast =
          index === breadcrumbs.length - 1;
  
        return (
          <div
            key={item.path}
            className="flex items-center gap-2"
          >
            <ChevronRight size={16} />

            {isLast ? (
              <span className="text-black font-medium">
                {item.title}
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-blue-500"
              >
                {item.title}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}