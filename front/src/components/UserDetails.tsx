import React, { ChangeEvent, useContext, useState } from 'react'
import { UserContext } from "../utils/use-auth";
import { ICustomer } from "../interfaces/ICustomer";
import { useMutation, useQueryClient } from "react-query";
import userService from "../services/user.service";
import customerService from "../services/customer.service";

const UserDetails = () => {
  const user = useContext(UserContext);
  const queryClient = useQueryClient();
  const [edit, setEdit] = useState(false);
  const update = useMutation(async (payload: ICustomer) => {
    return await customerService.updateCustomer(payload);
  }, {
    onSuccess() {
      queryClient.invalidateQueries("user");
      setEdit(false);
    }
  });
  const template = {
    id: user?.id || 0,
    name: user?.name || "",
    email: user?.email || "",
    address: user?.address || "",
    phone: user?.phone || "",
    dateOfBirth: user?.dateOfBirth || ""
  }
  const [modified, setModified] = useState<ICustomer>(template);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id: key, value } = event.target;
    setModified(prev => ({...prev, [key]: value}));
  }
  const onSubmit = async () => {
    update.mutateAsync(modified);
  }
  if (!user) return (<></>)
  return (
    <div id="user-details">
      <h3>Käyttäjätiedot</h3>
      <div className="form-item">
        <label htmlFor="name">Nimi</label>
        {edit
          ? (<input onChange={handleChange} value={modified.name} type="text" name="name" id="name" />)
          : (<span id="name">{user?.name}</span>)}
      </div>
      <div className="form-item">
        <label htmlFor="name">Sähköposti</label>
        {edit
          ? (<input onChange={handleChange}  value={modified.email} type="text" name="email" id="email" />)
          : (<span id="email">{user?.email}</span>)}
      </div>
      <div className="form-item">
        <label htmlFor="address">Osoite</label>
        {edit
          ? (<input onChange={handleChange}  value={modified.address} type="text" name="address" id="address" />)
          : (<span id="address">{user?.address}</span>)
        }
      </div>
      <div className="form-item">
        <label htmlFor="phone">Puhelinumero</label>
        {edit
          ? (<input onChange={handleChange}  value={modified.phone} type="text" name="phone" id="phone" />)
          : (<span id="phone">{user?.phone}</span>)
        }
      </div>
      <div className="form-item">
        <label htmlFor="dateOfBirth">Syntymäaika</label>
        {edit
          ? (<input onChange={handleChange}  value={modified.dateOfBirth} type="date" name="dateOfBirth" id="dateOfBirth" />)
          : (<span id="dateOfBirth">{user?.dateOfBirth}</span>)
        }
      </div>
      {edit
        ? (
          <>
            <button onClick={onSubmit}>Tallenna</button>
            <button onClick={() => {
              setModified(template);
              setEdit(false)
            }}>Peruuta muutokset</button>
          </>
        )
        : (<button onClick={() => {
          setModified({
            id: user?.id,
            name: user?.name,
            email: user?.email,
            address: user?.address,
            phone: user?.phone,
            dateOfBirth: user?.dateOfBirth
          });
          setEdit(true);
        }}>Muokkaa tietoja</button>)
      }
    </div>
  )
}
export default UserDetails;