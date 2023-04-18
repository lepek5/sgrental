import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from "react-router-dom";
import UserService from "../services/user.service";
import AddReservation from "../components/addReservation";
import UserDetailsDash from "../components/UserDetails.dash";
import UserDetails from "../components/UserDetails";

const UserDetailsPage = () => {
  const { id }  = useParams();
  const [user, setUser] = useState({
    id: 0
  });
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      const result = await UserService.getById(id);
      setUser(result);
    }
    fetchUser();
  }, [id])
  if(!user) {
    return (<p>Lataan tai muuta vikaa...</p>)
  }
  return (
    <main id="reservations">
      <h2>Varaukset</h2>
      <nav className="sub-nav">
        <Link to="details">Omat tiedot</Link>
        <Link to="reservations">Omat varaukset</Link>
      </nav>
      <section id="content">
        <Routes>
          <Route path="/" element={<UserDetailsDash />} />
          <Route path="details" element={<UserDetails />} />
          <Route path="reservations" element={<AddReservation />} />
        </Routes>
      </section>
    </main>
  )
}
export default UserDetailsPage;