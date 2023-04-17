import React from 'react'
import { IEmployee } from "../interfaces/IEmployee";

const EmployeeList = ({ employees }: { employees: IEmployee[] }) => {
  if (employees.length < 1) return (<p>Ei työntekijöitä listalla..</p>)
  const keys = Object.keys(employees[0]);
  return (
    <>
      <table id="employees-list">
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              {Object.values(emp).map((value, idx) => (
                <th key={`${emp.userId}-${value}`}>{value}</th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default EmployeeList;