import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Settings from "./pages/Settings"

import Auth from "./pages/Auth"
import Logout from "./pages/Logout"

import TempleHistory from "./pages/TempleHistory"
import TempleImages from "./pages/TempleImages"
import Festivals from "./pages/Festivals"
import DailyTimings from "./pages/DailyTimings"
import PoojaDetails from "./pages/PoojaDetails"
import ArchanaBooking from "./pages/ArchanaBooking";
import PoojaBooking from "./pages/PoojaBooking";
import FestivalTicketBooking from "./pages/FestivalTicketBooking";
import TimeSlotManagement from "./pages/TimeSlotManagement";

import CommitteeMembers from "./pages/CommitteeMembers";
import VolunteerTracking from "./pages/VolunteerTracking";
import EmployeeManagement from "./pages/EmployeeManagement";

function App() {
  const token = localStorage.getItem("token")

  return (
    <Routes>
      <Route
        path="/auth"
        element={<Auth />}
      />

      <Route
        path="/logout"
        element={<Logout />}
      />

      {token ? (
        <>
          <Route
            path="/"
            element={<Dashboard />}
          />
 <Route
          path="/temple-history"
          element={<TempleHistory />}
        />

        <Route
          path="/temple-images"
          element={<TempleImages />}
        />

        <Route
          path="/festivals"
          element={<Festivals />}
        />

        <Route
          path="/daily-timings"
          element={<DailyTimings />}
        />
        <Route
          path="/pooja-details"
          element={<PoojaDetails />}
        />
         <Route
          path="/Archana-booking"
          element={<ArchanaBooking />}
        />
         <Route
          path="/Pooja-booking"
          element={<PoojaBooking />}
        />
         <Route
          path="/Festival-ticket-booking"
          element={<FestivalTicketBooking />}
        />
         <Route
          path="/Time-slot-management"
          element={<TimeSlotManagement />}
        />
<Route
          path="/Committee-Members"
          element={<CommitteeMembers />}
        />
        <Route
          path="/Volunteer-Tracking"
          element={<VolunteerTracking />}
        />
        <Route
          path="/Employee-Management"
          element={<EmployeeManagement />}
        />
          <Route
            path="/users"
            element={<Users />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </>
      ) : (
        <Route
          path="*"
          element={
            <Navigate to="/auth" />
          }
        />
      )}
    </Routes>
  )
}

export default App