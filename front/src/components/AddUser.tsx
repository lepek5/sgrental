import React, { useState } from 'react'
import { ILogin } from "../interfaces/ILogin";
import { IUser, IUserLogin } from "../interfaces/IUser";
import UserService from "../services/user.service";

const AddUser = () => {
  const [user, setUser] = useState<ILogin>({
    email: "",
    password: ""
  });
  const [confirmation, setConfirmation] = useState("");
  const handleInputChange = (event: any) => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
  }
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const result = await UserService.createUser(user);
    console.log(typeof result)
  }
  return (
    <form onSubmit={onSubmit}>
      <h2>Rekisteröi käyttäjä</h2>
      <div className="form-item">
        <label htmlFor="name">Sähköposti</label>
        <input onChange={handleInputChange} placeholder="" type="text" id="email" name="email" />
      </div>

      <div className="form-item">
        <label htmlFor="name">Salasana</label>
        <input onChange={handleInputChange} placeholder="..salasana.." type="password" id="password" name="password" />
      </div>

      <div className="form-item">
        <label htmlFor="name">Salasanan varmennus</label>
        <input onChange={(e) => setConfirmation(e.target.value)} placeholder="..salasana uudelleen.." type="password" id="password_confirmation" name="password_confirmation" />
      </div>
      <button>Rekisteröi käyttäjä</button>
    </form>
  )
}

export default AddUser