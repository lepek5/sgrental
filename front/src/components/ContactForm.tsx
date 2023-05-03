import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [feedback, setFeedback] = useState("");
  const inputPairStyle = {
    display: "grid", gridTemplateColumns: "1fr 3fr"
  }
  const handleSubmit = () => {
    if (!feedback || feedback.length < 1) {
      alert("Palauteteksti on tyhjä.");
    } else {

    alert("Kiitos palautteestasi. Arvostamme suuresti!");
    }
  }
  const navigate = useNavigate();
  return (
    <div id="contact-form">
      <div className="" style={inputPairStyle}><label htmlFor="name">Nimesi</label>
      <input type="text" id="name"/></div>
      <div className="" style={inputPairStyle}><label htmlFor="email">Sähköpostiosoitteesi</label>
      <input type="email" id="email" /></div>
      <label htmlFor="feedback">Sinun asiasi</label>
      <textarea onChange={(e) => setFeedback(e.target.value)} name="feedback" rows={5} id="feedback"></textarea>
      <button onClick={handleSubmit}>Lähetä palaute</button>
      <button onClick={() => navigate(-1)}>Palaa takaisin</button>
    </div>
  )
}

export default ContactForm;