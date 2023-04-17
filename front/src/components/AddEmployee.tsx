import React, { CSSProperties, useState } from 'react'
import { IEmployee } from "../interfaces/IEmployee";
import employeeService from "../services/employee.service";

const AddEmployee = () => {
  const [notification, setNotification] = useState("");
  const [employee, setEmployee] = useState<IEmployee>({
    name: "",
    phone: "",
  });
  const notificationStyle = {
    visibility: notification.length > 0 ? "visible" : "hidden",
    transform: notification.length > 0 ? "scale(1)" : "scale(0)"
  } as CSSProperties;
  const handleInputChange = (event: any) => {
    const { id, value } = event.target;
    setEmployee({ ...employee, [id]: value });
  }
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const result = await employeeService.createEmployee(employee);
    console.log(result.data)
    setNotification(`Käyttäjätunnus luotu sähköpostilla ${result.data.email} ja salasanalla ${result.data.password}. Voit vaihtaa salasanasi käyttäjäpaneelista.`);
    setTimeout(() => {
      setNotification("");
    }, 5000);
  }
  return (
    <form onSubmit={onSubmit}>
      <h3>Rekisteröi uusi työntekijä</h3>
      <div className="form-item">
        <label htmlFor="name">Nimi</label>
        <input onChange={handleInputChange} placeholder="" type="text" id="name" name="name" />
      </div>
      <div className="form-item">
        <label htmlFor="name">Sähköposti</label>
        <input onChange={handleInputChange} placeholder="esim. otto@kaeyttaejae.org" type="text" id="email" name="email" />
      </div>
      <div className="form-item">
        <label htmlFor="name">Puhelinnumero</label>
        <input onChange={handleInputChange} placeholder="esim. 041 1234321" type="text" id="phone" name="phone" />
      </div>
      <button type="submit">Rekisteröi työntekijä</button>
      <div style={notificationStyle} className={notification.length > 1 ? "modal" : ""} id="notification">{notification}</div>
    </form>
  )
}

export default AddEmployee;