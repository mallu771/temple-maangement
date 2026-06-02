import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

import {
  LayoutDashboard,
  Users,
  Settings,
  ChevronDown,
  ChevronRight,
  Landmark,
  Image,
  CalendarDays,
  Clock3,
  ScrollText
} from "lucide-react"

const menus = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard
  },

  {
    title: "Temple Information",
    icon: Users,
    submenu: [
      {
        title: "Temple History",
        path: "/temple-history",
        icon: Landmark
      },
      {
        title: "Temple Images",
        path: "/temple-images",
        icon: Image
      },
      {
        title: "Festivals",
        path: "/festivals",
        icon: CalendarDays
      },
      {
        title: "Daily Timings",
        path: "/daily-timings",
        icon: Clock3
      },
      {
        title: "Pooja Details",
        path: "/pooja-details",
        icon: ScrollText
      }
    ]
  },

  {
    title: "Seva / Booking",
    icon: Users,
    submenu: [
      {
        title: "Archana booking",
        path: "/Archana-booking",
        icon: Landmark
      },
      {
        title: "Pooja booking",
        path: "/Pooja-booking",
        icon: Image
      },
      {
        title: "Festival ticket",
        path: "/Festival-ticket-booking",
        icon: CalendarDays
      },
      {
        title: "Time-slot",
        path: "/Time-slot-management",
        icon: Clock3
      }
    ]
  },
  {
    title: "Member",
    icon: Users,
    submenu: [
      {
        title: "Committee Members",
        path: "/Committee-Members",
        icon: Landmark
      },
      {
        title: "Volunteer Tracking",
        path: "/Volunteer-Tracking",
        icon: Image
      },
      {
        title: "Employees",
        path: "/Employee-Management",
        icon: CalendarDays
      }
    ]
  },
    {
    title: "Event & Festival",
    icon: Users,
    submenu: [
      {
        title: "Upcoming Festivals",
        path: "/Upcoming-Festivals",
        icon: Landmark
      },
      {
        title: "Banner Uploads",
        path: "/Banner-Uploads",
        icon: Image
      },
      {
        title: "Push Notifications",
        path: "/Push-Notifications",
        icon: CalendarDays
      },
       {
        title: "SMS Alerts",
        path: "/SMS-Alerts",
        icon: CalendarDays
      },
      
    ]
  },
{
    title: "Inventory",
    icon: Users,
    submenu: [
      {
        title: "Temple Assets",
        path: "/Temple-Assets",
        icon: Landmark
      },
      {
        title: "Oil Stock Tracking",
        path: "/Oil-Stock-Tracking",
        icon: Image
      },
      {
        title: "Flower Inventory",
        path: "/Flower-Inventory",
        icon: CalendarDays
      },
       {
        title: "Prasada Materials",
        path: "/Prasada-Materials",
        icon: CalendarDays
      },
       {
        title: "Donation Items",
        path: "/Donation-Items",
        icon: CalendarDays
      },
    ]
  },

{
    title: "Accounting",
    icon: Users,
    submenu: [
      {
        title: "Income & Expense",
        path: "/Daily-Income-Expense",
        icon: Landmark
      },
      {
        title: "Audit Reports",
        path: "/Audit-Reports",
        icon: Image
      },
      {
        title: "Monthly Reports",
        path: "/Monthly-Reports",
        icon: CalendarDays
      },
       {
        title: "Export PDF/Excel",
        path: "/Export-PDF-Excel",
        icon: CalendarDays
      },
      
    ]
  },

{
    title: "Donation",
    icon: Users,
    submenu: [
      {
        title: "Online Donation",
        path: "/Online-Donation",
        icon: Landmark
      },
      {
        title: "Donation Receipt",
        path: "/Donation-Receipt",
        icon: Image
      },
      {
        title: "Payment Tracking",
        path: "/Payment-Tracking",
        icon: CalendarDays
      },
       {
        title: "QR Payment Support",
        path: "/QR-Payment-Support",
        icon: CalendarDays
      },
      {
        title: "Razorpay Integration",
        path: "/Razorpay-Integration",
        icon: CalendarDays
      },{
        title: "PhonePe Integration",
        path: "/PhonePe-Integrationt",
        icon: CalendarDays
      },{
        title: "UPI Payment",
        path: "/UPI-Payment",
        icon: CalendarDays
      },
    ]
  },

  /* {
    title: "Users",
    path: "/users",
    icon: Users
  },

  {
    title: "Settings",
    path: "/settings",
    icon: Settings
  } */
]

function Sidebar() {
  const location = useLocation()

  const [openMenu, setOpenMenu] = useState("Dashboard")

  const toggleMenu = title => {
    setOpenMenu(openMenu === title ? "" : title)
  }

  return (
    <div className="w-68 h-screen bg-slate-900 text-white flex flex-col">
      {/* Logo */}
      <div className=" border-b border-slate-700">
        <img
          src="/src/Images/temple.jfif"
          alt="Temple"
          className=" w-full mx-auto h-40 rounded"
        />
      </div>

      {/* Menu */}
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menus.map(menu => {
          const Icon = menu.icon

          // SUBMENU
          if (menu.submenu) {
            return (
              <div key={menu.title}>
                <button
                  onClick={() => toggleMenu(menu.title)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-800 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <span>{menu.title}</span>
                  </div>

                  {openMenu === menu.title ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>

                {/* Submenu Items */}
                {openMenu === menu.title && (
                  <div className="ml-6 mt-2 space-y-1">
                    {menu.submenu.map(sub => {
                      const SubIcon = sub.icon

                      return (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all
                          ${
                            location.pathname === sub.path
                              ? "bg-blue-600"
                              : "hover:bg-slate-800"
                          }`}
                        >
                          <SubIcon size={18} />
                          <span>{sub.title}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          }

          // NORMAL MENU
          return (
            <Link
              key={menu.path}
              to={menu.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all
              ${
                location.pathname === menu.path
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />
              <span>{menu.title}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar