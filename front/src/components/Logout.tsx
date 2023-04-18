import React, { useEffect } from 'react'
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    navigate("/");
    navigate(0);
  }, [])
  return (
    <div>logsin ulos..</div>
  )
}

export default Logout;