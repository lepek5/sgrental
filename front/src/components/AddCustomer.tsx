import React, { CSSProperties, useState } from 'react'
import { ICustomer } from "../interfaces/ICustomer";
import customerService from "../services/customer.service";

const AddCustomer = () => {
  const [notification, setNotification] = useState("");
  const [customer, setCustomer] = useState<ICustomer>({
    name: "",
    phone: "",
    email: "",
    address: "",
    dateOfBirth: ""
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
    const result = await customerService.createCustomer(customer);
    console.log(result.data)
    setNotification(`Käyttäjätunnus luotu sähköpostilla ${result.data.email} ja salasanalla ${result.data.password}. Voit vaihtaa salasanasi käyttäjäpaneelista.`);
    setTimeout(() => {
      setNotification("");
    },5000);
  }
  return (
    <form onSubmit={onSubmit}>
      <div style={notificationStyle} className={notification.length > 1 ? "modal" : ""} id="notification">{notification}</div>
      <h2>Rekisteröi käyttäjä</h2>
      <div className="form-item">
        <label htmlFor="name">Nimi</label>
        <input onChange={handleInputChange} placeholder="" type="text" id="name" name="name" />
      </div>

      <div className="form-item">
        <label htmlFor="name">Sähköposti</label>
        <input onChange={handleInputChange} placeholder="esim. otto@kaeyttaejae.org" type="text" id="email" name="email" />
      </div>

      <div className="form-item">
        <label htmlFor="name">Osoite</label>
        <input onChange={handleInputChange} placeholder="esim. Olavinkatu 25 b 12 57100 Savonlinna" type="text" id="address" name="address" />
      </div>

      <div className="form-item">
        <label htmlFor="name">Puhelinnumero</label>
        <input onChange={handleInputChange} placeholder="esim. 041 1234321" type="text" id="phone" name="phone" />
      </div>

      <div className="form-item">
        <label htmlFor="name">Syntymäaika</label>
        <input onChange={handleInputChange} placeholder="" type="date" id="dateOfBirth" name="dateOfBirth" />
      </div>
      <button type="submit">Rekisteröi asiakas</button>
    </form>
  )
}

export default AddCustomer