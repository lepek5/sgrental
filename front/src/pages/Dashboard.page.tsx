import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import DashboardNavbar from "../components/Dashboard.Navbar";
import CustomersPage from "./Customers.page";
import ProductsPage from "./Products.page";
import ReservationPage from "./Reservations.page";
import UsersPage from "./Users.page";
const Test = () => {
  return <h1>foo</h1>;
}
const DashboardPage = () => {
  return (
    <>
      <DashboardNavbar />
      <Routes>
        <Route path="add-product" element={<AddProduct />} />
        <Route path="products/*" element={<ProductsPage />} />
        <Route path="reservations/*" element={<ReservationPage />} />
        <Route path="customers/*" element={<CustomersPage />} />
      </Routes>
    </>
  )
}
export default DashboardPage;