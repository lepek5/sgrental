import React, { useState } from 'react'
import { ILogin } from "../interfaces/ILogin";
import userService from "../services/user.service";

const Login = () => {
  const [credentials, setCredentials] = useState<ILogin>({
    email: "",
    password: ""
  });
  const handleInputChange = (event: any) => {
    const { id, value } = event.target;
    setCredentials({...credentials, [id]: value});
  };
  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const result = await userService.login(credentials);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form id="user-login" onSubmit={onSubmit}>
      <div className="form-item">
        <label htmlFor="name">Sähköposti</label>
        <input onChange={handleInputChange} placeholder="" type="text" id="email" name="email" />
      </div>
      <div className="form-item">
        <label htmlFor="name">Salasana</label>
        <input onChange={handleInputChange} placeholder="salasana.." type="password" id="password" name="password" />
      </div>
      <button type="submit">Kirjaudu</button>
    </form>
  )
}

export default Login;