import React from 'react'
import { Link, Route, Routes } from "react-router-dom"
import AddUser from "../components/AddUser"

const UsersPage = () => {
  return (
    <div>Users
      <Link to="add">Lisää käyttäjä </Link>
      <Link to="list">Selaa käyttäjiä</Link>
      <Routes>
        <Route path="add" element={<AddUser />} />
      </Routes>
    </div>
  )
}

export default UsersPage