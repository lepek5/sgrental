import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import DashboardNavbar from "../components/Dashboard.Navbar";
import CustomersPage from "./Customers.page";
import ProductsPage from "./Products.page";
import ReservationPage from "./Reservations.page";
import Dashboard from "../components/Dashboard.dash";
import EmployeePage from "./Employee.page";
const DashboardPage = () => {
  return (
    <>
      <DashboardNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="products/*" element={<ProductsPage />} />
        <Route path="reservations/*" element={<ReservationPage />} />
        <Route path="customers/*" element={<CustomersPage />} />
        <Route path="employees/*" element={<EmployeePage />} />
      </Routes>
    </>
  )
}
export default DashboardPage;