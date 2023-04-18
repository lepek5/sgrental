import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import AddUser from "../components/AddUser"
import UsersList from "../components/UsersList";
import UserService from "../services/user.service";
const UsersPage = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await UserService.getAll();
      setUsers(result);
    }
    fetchUsers();
  }, []);
  return (
    <main id="users">
      <h2>Käyttäjät</h2>
      <nav className="sub-nav">
        <Link to="add">Lisää käyttäjä </Link>
        <Link to="list">Selaa käyttäjiä</Link>
      </nav>
      <section id="content">
        <Routes>
          <Route path="add" element={<AddUser />} />
          <Route path="list" element={<UsersList users={users} />} />
        </Routes>
      </section>
    </main>
  )
}

export default UsersPage