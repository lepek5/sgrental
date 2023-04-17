import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import AddCustomer from "../components/AddCustomer";
import CustomerList from "../components/Customer.list";
import Customers from "../components/Customers.dash";
import customerService from "../services/customer.service";
const CustomersPage = () => {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await customerService.getAll();
      setCustomers(result);
    }
    fetchUsers();
  }, []);
  return (
    <main id="customers">
      <h2>Asiakkaat</h2>
      <nav className="sub-nav">
        <Link to="add">Lisää</Link>
        <Link to="list">Selaa</Link>
      </nav>
      <section id="content">
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="add" element={<AddCustomer />} />
          <Route path="list" element={<CustomerList customers={customers} />} />
        </Routes>
      </section>
    </main>
  )
}

export default CustomersPage