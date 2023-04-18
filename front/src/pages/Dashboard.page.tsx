import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardNavbar from "../components/Dashboard.Navbar";
import CustomersPage from "./Customers.page";
import ProductsPage from "./Products.page";
import ReservationPage from "./Reservations.page";
import Dashboard from "../components/Dashboard.dash";
import EmployeePage from "./Employee.page";
import UserDetailsPage from "./UserDetails.page";
const DashboardPage = () => {
  return (
    <>
      <DashboardNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="products/*" element={<ProductsPage />} />
        <Route path="reservations/*" element={<ReservationPage />} />
        <Route path="customers/*" element={<CustomersPage />} />
        <Route path="employees/*" element={<EmployeePage />} />
        <Route path="user/*" element={<UserDetailsPage />} />
      </Routes>
    </>
  )
}
export default DashboardPage;