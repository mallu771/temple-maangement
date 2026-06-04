import Sidebar from "../components/layout/Sidebar"
import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  ShieldCheck,
  Lock,
  KeyRound
} from "lucide-react"

function Security() {

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100 dark:bg-gray-950">

        <div className="p-6">

          <Breadcrumbs />

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Security Settings
            </h2>

            <div className="space-y-6">

              <div className="border dark:border-gray-700 rounded-2xl p-5 flex items-center gap-4">

                <Lock className="text-red-500" />

                <div>
                  <h3 className="font-semibold dark:text-white">
                    Change Password
                  </h3>

                  <p className="text-gray-500">
                    Update login password
                  </p>
                </div>

              </div>

              <div className="border dark:border-gray-700 rounded-2xl p-5 flex items-center gap-4">

                <KeyRound className="text-green-500" />

                <div>
                  <h3 className="font-semibold dark:text-white">
                    Two Factor Authentication
                  </h3>

                  <p className="text-gray-500">
                    Enable OTP verification
                  </p>
                </div>

              </div>

              <div className="border dark:border-gray-700 rounded-2xl p-5 flex items-center gap-4">

                <ShieldCheck className="text-blue-500" />

                <div>
                  <h3 className="font-semibold dark:text-white">
                    Login Activity
                  </h3>

                  <p className="text-gray-500">
                    Last Login: Today 09:45 AM
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Security