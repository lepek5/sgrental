import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import AddCustomer from "../components/AddCustomer";
import CustomerList from "../components/Customer.list";
import customerService from "../services/customer.service";
const CustomersPage = () => {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await customerService.getAll();
    }
    fetchUsers();
  }, []);
  return (
    <main id="customers">
      <nav className="sub-nav">
        <Link to="add">Lisää asiakas</Link>
        <Link to="list">Selaa asiakkaita</Link>
      </nav>
      <section id="content">
        <Routes>
          <Route path="add" element={<AddCustomer />} />
          <Route path="list" element={<CustomerList customers={customers} />} />
        </Routes>
      </section>
    </main>
  )
}

export default CustomersPage