import React from 'react'
import { ICustomer } from "../interfaces/ICustomer";

const CustomerList = ({customers}: {customers: ICustomer[]}) => {
  if (!customers || customers.length < 1) {
    return (
      <>Eipä oo osumia.. hmmm...</>
    )
  }
  return (
    <>
    {customers.map(customer => <p>{customer.name}</p>)}
    </>
  )
};

export default CustomerList;