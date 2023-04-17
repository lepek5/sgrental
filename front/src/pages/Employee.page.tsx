import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddEmployee from "../components/AddEmployee";
import EmployeeDash from "../components/Employee.dash";
import employeeService from "../services/employee.service";
import EmployeeList from "../components/Employee.list";
import { IEmployee } from "../interfaces/IEmployee";
const EmployeePage = () => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      const result = await employeeService.getAll();
      setEmployees(result);
    }
    fetchEmployees();
  },[]);
  return (
    <main id="customers">
      <h2>Työntekijät</h2>
      <nav className="sub-nav">
        <Link to="add">Lisää</Link>
        <Link to="list">Selaa</Link>
      </nav>
      <section id="content">
        <Routes>
          <Route path="/" element={<EmployeeDash />} />
          <Route path="add" element={<AddEmployee />} />
          <Route path="list" element={<EmployeeList employees={employees} />} />
        </Routes>
      </section>
    </main>
  )
}
export default EmployeePage;