import React, { CSSProperties, useState } from 'react'
import { useMutation, useQueryClient } from "react-query";
import customerService from "../services/customer.service";
import { ICustomer, ICustomerRegister } from "../interfaces/ICustomer";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [notification, setNotification] = useState("");
  const [customer, setCustomer] = useState<ICustomerRegister>({
    name: "",
    phone: "",
    email: "",
    address: "",
    dateOfBirth: "",
    password: "",
    cPassword: ""
  });

  const createMutation = useMutation(async (payload: ICustomerRegister) => {
    return await customerService.createCustomer(payload)
  },
    {
      onError(error, variables, context) {
        if (error === "Value must be unique") {
          alert("Sähköpostiosoite on jo käytössä!");
        }
      },
      onSuccess: ({ data }) => {
        queryClient.invalidateQueries("customers");
        alert("Käyttäjätunnus luotu! Sinut ohjataan kirjautumissivulle.");
        //setNotification(`Käyttäjätunnus luotu sähköpostilla ${data.email} ja salasanalla ${data.password}. Voit vaihtaa salasanasi käyttäjäpaneelista.`);
        setTimeout(() => {
          //setNotification("");
          navigate("/login");
        }, 2000);
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
    if (customer.password != customer.cPassword) {
      alert("Salasanat eivät täsmää");
    } else {
      createMutation.mutateAsync(customer);
    }
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
            <input onChange={handleInputChange} type="password" id="cPassword" name="cPassword" />
          </div>
          <button type="submit">Rekisteröi asiakas</button>
          <div style={notificationStyle} className={notification.length > 1 ? "modal" : ""} id="notification">{notification}</div>
        </form>
      </section>
    </main>

  )
}

export default Register;