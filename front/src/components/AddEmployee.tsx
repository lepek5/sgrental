import React, { CSSProperties, useState } from 'react'
import { IEmployee } from "../interfaces/IEmployee";
import employeeService from "../services/employee.service";
import { useMutation, useQueryClient } from "react-query";

const AddEmployee = () => {
  const queryClient = useQueryClient();
  const [notification, setNotification] = useState("");
  const [employee, setEmployee] = useState<IEmployee>({
    name: "",
    phone: "",
  });
  const createMutation = useMutation(async (payload: IEmployee) => {
    return await employeeService.createEmployee(payload)
  },
    {
      onSuccess: ({ data }) => {
        queryClient.invalidateQueries("employees");
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
    setEmployee({ ...employee, [id]: value });
  }
  const onSubmit = async (e: any) => {
    e.preventDefault();
    createMutation.mutateAsync(employee);
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