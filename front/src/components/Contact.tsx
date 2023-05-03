import React from 'react'
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-wrapper">
      <p>Onko sinulla meille kerrottavaa tai meiltä kysyttävää? Täytä alla oleva lomake niin otamme viestisi vastaan ja vaalimme mielipidettäsi!</p>
      <ContactForm />
      </div>
    </section>
  )
}

export default Contact;