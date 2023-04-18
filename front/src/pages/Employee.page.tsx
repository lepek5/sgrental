import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddEmployee from "../components/AddEmployee";
import EmployeeDash from "../components/Employee.dash";
import employeeService from "../services/employee.service";
import EmployeeList from "../components/Employee.list";
import { useQuery } from "react-query";
const EmployeePage = () => {
  const { data: employees, isLoading } = useQuery(
    "employees",
    async () => await employeeService.getAll()
  );
  return (
    <main id="customers">
      <h2>Työntekijät</h2>
      <nav className="sub-nav">
        <Link to="add">Lisää</Link>
        <Link to="list">Selaa</Link>
      </nav>
      <section id="content">
        {isLoading ? (<em>Lataan työntekijöitä..</em>) : (
          <Routes>
            <Route path="/" element={<EmployeeDash />} />
            <Route path="add" element={<AddEmployee />} />
            <Route path="list" element={<EmployeeList employees={employees} />} />
          </Routes>
        )}
      </section>
    </main>
  )
}
export default EmployeePage;