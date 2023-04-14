import React from 'react'
import { Link } from "react-router-dom";
import { IUser } from "../interfaces/IUser"
const parseIsoDateToDate = (string: string) => {
  return new Date(string).toUTCString();
}
const UsersList = ({ users }: { users: IUser[] }) => {
  if (!users) return (<em>Loading..</em>);
  const keys = Object.keys(users[0]);
  const getKeyValue = (arr: any[]) => {
    return {
      key: arr[0],
      value: arr[1]
    }
  }
  return (
    <>
      <h3>Käyttäjälista</h3>
      <table id="users">
        <tbody>
          <tr>
            {keys.map((key, idx) => <th key={idx}>{key}</th>)}
          </tr>
          { }
          {users.map(user => (
            <Link to={`../`+user.id.toString()}>
            <tr key={user.id}>
              {Object.entries(user).map(value => (
                <td key={value.toString()}>{
                  getKeyValue(value).key === "created_at"
                    ? parseIsoDateToDate(getKeyValue(value).value)
                    : getKeyValue(value).value}</td>
              ))}
            </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UsersList