import React, { CSSProperties, useState } from 'react'
import { useMutation, useQueryClient } from "react-query";
import customerService from "../services/customer.service";
import { ICustomer, ICustomerRegister } from "../interfaces/ICustomer";

const Register = () => {
  const queryClient = useQueryClient();
  const [notification, setNotification] = useState("");
  const [customer, setCustomer] = useState<ICustomerRegister>({
    name: "",
    phone: "",
    email: "",
    address: "",
    dateOfBirth: "",
    password: ""
  });

  const createMutation = useMutation(async (payload: ICustomerRegister) => {
    return await customerService.createCustomer(payload)
  },
    {
      onSuccess: ({ data }) => {
        queryClient.invalidateQueries("customers");
        setNotification(`Käyttäjätunnus luotu sähköpostilla ${data.email} ja salasanalla ${data.password}. Voit vaihtaa salasanasi käyttäjäpaneelista.`);
        setTimeout(() => {
          setNotification("");
        }, 5000);
      }
    });

  const notificationStyle = {
    visibility: notification.length > 0 ? "visible" : "hidden",
    transform: notification.length > 0 ? "scale(1)" : "scale(0)"
  } as CSSProperties;
  const handleInputChange = (event: any) => {
    const { id, value } = event.target;
    setCustomer({ ...customer, [id]: value });
  }
  const onSubmit = async (e: any) => {
    e.preventDefault();
    createMutation.mutateAsync(customer);
  }
  return (
    <main id="register">
      <nav id="dashboard-nav"></nav>
        <h2>Luo uusi käyttäjätunnus</h2>
      <section id="content">
        <form onSubmit={onSubmit}>
          <div className="form-item">
            <label htmlFor="name">Nimi</label>
            <input onChange={handleInputChange} placeholder="" type="text" id="name" name="name" />
          </div>

          <div className="form-item">
            <label htmlFor="name">Sähköposti</label>
            <input onChange={handleInputChange} type="text" id="email" name="email" />
          </div>

          <div className="form-item">
            <label htmlFor="name">Osoite</label>
            <input onChange={handleInputChange} type="text" id="address" name="address" />
          </div>

          <div className="form-item">
            <label htmlFor="name">Puhelinnumero</label>
            <input onChange={handleInputChange} type="text" id="phone" name="phone" />
          </div>

          <div className="form-item">
            <label htmlFor="name">Syntymäaika</label>
            <input onChange={handleInputChange} type="date" id="dateOfBirth" name="dateOfBirth" />
          </div>
          <div className="form-item">
            <label htmlFor="name">Salasana</label>
            <input onChange={handleInputChange} type="password" id="password" name="password" />
          </div>
          <div className="form-item">
            <label htmlFor="name">Vahvista salasana</label>
            <input onChange={handleInputChange} type="password" id="password-confirm" name="password-confirm" />
          </div>
          <button type="submit">Rekisteröi asiakas</button>
          <div style={notificationStyle} className={notification.length > 1 ? "modal" : ""} id="notification">{notification}</div>
        </form>
      </section>
    </main>

  )
}

export default Register;