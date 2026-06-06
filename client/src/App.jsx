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


import CommitteeMembers from "./pages/CommitteeMembers";
import VolunteerTracking from "./pages/VolunteerTracking";
import EmployeeManagement from "./pages/EmployeeManagement";

import UpcomingFestivals from "./pages/UpcomingFestivals";
import BannerUpload from "./pages/BannerUpload "
import PushNotification from "./pages/PushNotification";
import SMSAlerts from "./pages/SMSAlerts";

import TempleAssets from "./pages/TempleAssets"
import OilInventory from "./pages/OilInventory"
import FlowerInventory from "./pages/FlowerInventory"
import DonationItems from "./pages/DonationItems"
import PrasadaMaterials from "./pages/PrasadaMaterials"
import DailyAccounts from "./pages/DailyAccounts"
import AuditReports from "./pages/AuditReports"
import ExportReports from "./pages/ExportReports";
import OnlineDonation from "./pages/OnlineDonation";
import DonationReceipt from "./pages/DonationReceipt";
import PaymentTracking from "./pages/PaymentTracking";
import QRPayment from "./pages/QRPayment";
import RazorpayPayment from "./pages/RazorpayPayment";
import UpiPayment from "./pages/UpiPayment";
import MonthlyReports from "./pages/MonthlyReports"
import Profile from "./pages/Profile"
import Security from "./pages/Security"

function App() {
  const token = localStorage.getItem("token")
console.log("Token =>", token)
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
         <Route path="/Archana-booking"
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
          path="/Upcoming-Festivals"
          element={<UpcomingFestivals  />}
        />
          <Route
          path="/Banner-Uploads"
          element={<BannerUpload />}
        />
          <Route
          path="/Push-Notifications"
          element={<PushNotification  />}
        />
          <Route
          path="/SMS-Alerts"
          element={<SMSAlerts  />}
        />
         <Route
          path="/Temple-Assets"
          element={<TempleAssets  />}
        />
         <Route
          path="/Oil-Stock-Tracking"
          element={<OilInventory  />}
        />
         <Route
          path="/Flower-Inventory"
          element={<FlowerInventory  />}
        />
         <Route
          path="/Prasada-Materials"
          element={<PrasadaMaterials  />}
        />
         <Route
          path="/Donation-Items"
          element={<DonationItems  />}
        />
        <Route
          path="/Daily-Income-Expense"
          element={<DailyAccounts  />}
        />
           <Route
          path="/Audit-Reports"
          element={<AuditReports   />}
        />
           <Route
          path="/Monthly-Reports"
          element={<MonthlyReports   />}
        />
           
          
         <Route
          path="/Online-Donation"
          element={<OnlineDonation/>}
        /> 
         <Route path="/profile" element={<Profile />} />

<Route path="/settings" element={<Settings />} />

<Route path="/security" element={<Security />} />
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