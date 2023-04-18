import React, { useState } from 'react'
import { ILogin } from "../interfaces/ILogin";
import userService from "../services/user.service";
import { useMutation, useQueryClient } from "react-query";
import { Storage } from "../utils/helpers";

const Login = () => {
  const queryClient = useQueryClient();
  const [credentials, setCredentials] = useState<ILogin>({
    email: "",
    password: ""
  });
  const login = useMutation(async (payload: ILogin) => await userService.login(payload),
  {
    onSuccess: (data) => {
    }
  });
  const handleInputChange = (event: any) => {
    const { id, value } = event.target;
    setCredentials({ ...credentials, [id]: value });
  };
  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      login.mutateAsync(credentials);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main id="login">
      <nav id="dashboard-nav"></nav>
      <h2>Kirjaudu sisään</h2>
      <section id="content">
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
      </section>
    </main>
  )
}

export default Login;