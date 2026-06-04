import Sidebar from "../components/layout/Sidebar"
import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  User,
  Mail,
  Phone,
  MapPin
} from "lucide-react"

function Profile() {

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100 dark:bg-gray-950">

        <div className="p-6">

          <Breadcrumbs />

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8">

            <div className="flex flex-col md:flex-row gap-8">

              <img
                src="https://i.pravatar.cc/200"
                alt="profile"
                className="w-40 h-40 rounded-full border-4 border-orange-500"
              />

              <div>

                <h1 className="text-4xl font-bold dark:text-white">
                  Temple Admin
                </h1>

                <p className="text-gray-500 mt-2">
                  Temple Management Administrator
                </p>

                <div className="mt-8 space-y-4">

                  <div className="flex gap-3 dark:text-gray-300">
                    <User size={18} />
                    Mallikarjun
                  </div>

                  <div className="flex gap-3 dark:text-gray-300">
                    <Mail size={18} />
                    admin@temple.com
                  </div>

                  <div className="flex gap-3 dark:text-gray-300">
                    <Phone size={18} />
                    +91 9876543210
                  </div>

                  <div className="flex gap-3 dark:text-gray-300">
                    <MapPin size={18} />
                    Karnataka, India
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Profile