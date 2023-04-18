import React from 'react'
import { Link, Route, Routes } from "react-router-dom"
import AddCustomer from "../components/AddCustomer";
import CustomerList from "../components/Customer.list";
import Customers from "../components/Customers.dash";
import customerService from "../services/customer.service";
import { useQuery } from "react-query";
const CustomersPage = () => {
  const { data: customers, isLoading} = useQuery(
    "customers",
    async () => await customerService.getAll()
  );
  return (
    <main id="customers">
      <h2>Asiakkaat</h2>
      <nav className="sub-nav">
        <Link to="add">Lisää</Link>
        <Link to="list">Selaa</Link>
      </nav>
      <section id="content">
        { isLoading ? (<em>Lataan asiakkaita..</em>) : (
          <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="add" element={<AddCustomer />} />
          <Route path="list" element={<CustomerList customers={customers} />} />
        </Routes>
        )}
      </section>
    </main>
  )
}

export default CustomersPage