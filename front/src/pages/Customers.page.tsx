import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import AddCustomer from "../components/AddCustomer";
import CustomerList from "../components/Customer.list";
import Customers from "../components/Customers.dash";
import getCustomers from "../queries/customer";
import { useQuery, useQueryClient } from "react-query";
import customerService from "../services/customer.service";
const CustomersPage = () => {
  const queryClient = useQueryClient();
  const { data: customers, isLoading} = useQuery("customers", async () => {
    return await customerService.getAll()
  },{
    onSuccess() {
      queryClient.invalidateQueries("customers");
    },
  });
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