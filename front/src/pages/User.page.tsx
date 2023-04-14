import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { IUser } from "../interfaces/IUser"
import UserService from "../services/user.service";

const UserPage = () => {
  const { id }  = useParams();
  const [entries, setEntries] = useState([]);
  const [user, setUser] = useState({
    id: 0
  });
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      const result = await UserService.getById(id);
      setUser(result);
      console.log("result", result)
    }
    fetchUser();
  }, [id])
  if(!user) {
    return (<p>Lataan tai muuta vikaa...</p>)
  }
  return (
    <div id={`user`}>
    <h2>Käyttäjä id: {user.id}</h2>
    { edit
      ? (
          <>
          {Object.entries(user).map((entry, idx) => {
            const { [0]: key, [1]: value } = entry;
              <div className="user-data" key={idx}><p>{key}</p><p>{value}</p></div>
          } )}
          </>
        )
      : (
          <>
          {Object.entries(user).map((entry, idx) => {
            const { [0]: key, [1]: value } = entry;
              <div className="user-data" key={idx}><p>{key}</p><p>{value}</p></div>
          } )}
          </>
        )
    }
    </div>
  )
}
export default UserPage