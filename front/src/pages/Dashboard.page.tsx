import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import DashboardNavbar from "../components/Dashboard.Navbar";
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
      <Route path="test" element={<Test />}  />
      <Route path="add-product" element={<AddProduct />} />
      <Route path="reservations/*" element={<ReservationPage />} />
      <Route path="users/*" element={<UsersPage />} />
      </Routes>
    </>
  )
}
export default DashboardPage;