import React, { useState } from 'react'
import { ICustomer } from "../interfaces/ICustomer";
import UserService from "../services/user.service";

const AddCustomer = () => {
  const [user, setUser] = useState<ICustomer>({
    name: "",
    phone: "",
    address: "",
    date_of_birth: ""
  });
  const handleInputChange = (event: any) => {
    const { id, value } = event.target;
    setUser({ ...user, [id]: value });
  }
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const result = await UserService.createUser(user);
    console.log(result)
  }
  return (
    <form onSubmit={onSubmit}>
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
        <input onChange={handleInputChange} placeholder="" type="date" id="date_of_birth" name="date_of_birth" />
      </div>
      <button>Rekisteröi käyttäjä</button>
    </form>
  )
}

export default AddCustomer