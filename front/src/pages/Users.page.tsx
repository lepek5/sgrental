import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import AddUser from "../components/AddUser"
import UsersList from "../components/UsersList";
import UserService from "../services/UserService";

const UsersPage = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await UserService.getAll();
      setUsers(result.data);
    }
    fetchUsers();
  }, []);
  return (
    <div>Users
      <Link to="add">Lisää käyttäjä </Link>
      <Link to="list">Selaa käyttäjiä</Link>
      <Routes>
        <Route path="add" element={<AddUser />} />
        <Route path="list" element={<UsersList users={users} />} />
      </Routes>
    </div>
  )
}

export default UsersPage