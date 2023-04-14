import React, { useEffect, useState } from 'react'
import { IUser } from "../interfaces/IUser";
import userService from "../services/user.service";

const UserSelector = ({fetchUser}:{fetchUser: any}) => {
  const [users, setUsers] = useState<IUser[]>();
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await userService.getAll();
      setUsers(result);
    }
    fetchUsers();
  }, [])
  if (!users) return (<>...</>)
  return (
    <ul id="user-listing">
      {users.map(user => (
        <li onClick={fetchUser} className="list-user" key={user.id}>{user.email}</li>
      ))}
    </ul>
  )
}

export default UserSelector