import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import AddUser from "../components/AddUser"
import UsersList from "../components/UsersList";
import UserService from "../services/user.service";
import UserPage from "./User.page";

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
      <nav className="sub-nav">
        <Link to="add">Lisää käyttäjä </Link>
        <Link to="list">Selaa käyttäjiä</Link>
      </nav>
      <section id="content">
        <Routes>
          <Route path="add" element={<AddUser />} />
          <Route path="list" element={<UsersList users={users} />} />
          <Route path=":id" element={<UserPage />} />
        </Routes>
      </section>
    </main>
  )
}

export default UsersPage