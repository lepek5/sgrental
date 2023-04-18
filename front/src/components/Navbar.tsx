import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import userService from "../services/user.service";

const Navbar = () => {
  const { data: user, isLoading } = useQuery("user", async () => {
    return await userService.whoami();
  });
  if (isLoading) return (<h4>loading..</h4>)
  return (
    <>
      <nav>
        <ul id="nav-items">
          <Link to="/products"><li className="nav-item">Selaa tuotteita</li></Link>
          {user
            ? (
              <>
                <Link to="/dash"><li className="nav-item">Hallintapaneeli</li></Link>
                <Link to="/logout"><li className="nav-item">Kirjaudu ulos</li></Link>
              </>
            )
            : (
              <>
                <Link to="/register"><li className="nav-item">Luo uusi tunnus</li></Link>
                <Link to="/login"><li className="nav-item">Kirjaudu sisään</li></Link>
              </>
            )
          }

        </ul>
      </nav>
    </>
  )
};
export default Navbar;