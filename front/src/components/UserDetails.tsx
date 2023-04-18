import React, { useContext, useState } from 'react'
import { UserContext } from "../utils/use-auth";
import { ICustomer } from "../interfaces/ICustomer";

const UserDetails = () => {
  const user = useContext(UserContext);
  if (!user) return (<></>)
  const [edit, setEdit] = useState(false);
  const [modified, setModified] = useState<ICustomer>({
    name: user.name || "",
    email: user.email || "",
    address: user.address || "",
    phone: user.phone || "",
    dateOfBirth: user.dateOfBirth || ""
  });
  return (
    <div id="user-details">
      <h3>Käyttäjätiedot</h3>
      <div className="form-item">
        <label htmlFor="name">Nimi</label>
        {edit
          ? (<input value={modified.name} type="text" name="name" id="name" />)
          : (<span id="name">{user?.name}</span>)}
      </div>
      <div className="form-item">
        <label htmlFor="name">Sähköposti</label>
        {edit
          ? (<input value={modified.email} type="text" name="email" id="email" />)
          : (<span id="email">{user?.email}</span>)}
      </div>
      <div className="form-item">
        <label htmlFor="address">Osoite</label>
        {edit
          ? (<input value={modified.address} type="text" name="address" id="address" />)
          : (<span id="address">{user?.address}</span>)
        }
      </div>
      <div className="form-item">
        <label htmlFor="phone">Puhelinumero</label>
        {edit
          ? (<input value={modified.phone} type="text" name="phone" id="phone" />)
          : (<span id="phone">{user?.phone}</span>)
        }
      </div>
      {edit
        ? (
          <>
            <button>Tallenna</button>
            <button onClick={() => setEdit(false)}>Peruuta muutokset</button>
          </>
        )
        : (<button onClick={() => setEdit(true)}>Muokkaa tietoja</button>)
      }
    </div>
  )
}
export default UserDetails;