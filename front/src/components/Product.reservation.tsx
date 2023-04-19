import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../services/product.service";
import { UserContext } from "../utils/use-auth";
import reservationService from "../services/reservation.service";

const ProductReservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const [reservation, setReservation] = useState({
    start: "",
    end: ""
  })
  const [days, setDays] = useState(0);
  const parseDayDifference = (difference: number) => {
    return Math.ceil(difference / (1000 * 3600 * 24));
  }
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id: key, value } = event.target;
    setReservation(res => ({ ...res, [key]: value }));
  }
  useEffect(() => {
    const { start, end } = reservation;
    const difference = new Date(end).getTime() - new Date(start).getTime();
    setDays(parseDayDifference(difference));
  }, [reservation]);
  
  const { data: product, isLoading } = useQuery(["products", id], async () => {
    return await productService.getById(id);
  });
  if (isLoading) return (<em>Ladataan..</em>);
  const confimString = `Haluatko vuokrata tuotteen \"${product.title}\" aikavälille ${new Date(reservation.start).toDateString()} - ${new Date(reservation.end).toDateString()} hintaan ${days*product.price} euroa?`
  const handleSubmit = async () => {
    if (days < 1) {
      alert("Minimivuokra-aika on 1 vuorokausi!");
    } else if (new Date().getTime() > new Date(reservation.start).getTime()) {
      alert("Et voi varata menneisyydestä!")
    } else {
      const isOk = confirm(confimString);
      if (isOk) {
        const request = {
          productId: product.id,
          customerId: user.id,
          startAt: reservation.start,
          endAt: reservation.end
        }
        const result = await reservationService.createReservation(request); 
      }
    }
  }
  if (!product) return (<em>Tuotetta ei löydy</em>);
  return (
    <div className="product-reservation">
      <h3>Vuokraa tuote</h3>
      <div className="help">
        Minimivuokra-aika 1 vrk. Maksu suoritetaan paikan päällä toimipisteessä.
      </div>
      <div className="product">
        <div className="title">
          {product.title}
        </div>
        <div className="price">
          {product.price}e/vrk
        </div>
      </div>
      <div className="start">
        <label htmlFor="start">Aloituspäivämäärä</label>
        <input onChange={handleDateChange} value={reservation.start} id="start" name="start" type="date" />
      </div>
      <div className="end">
        <label htmlFor="end">Viimeinen vuokrapäivä</label>
        <input onChange={handleDateChange} value={reservation.end} id="end" name="end" type="date" />
      </div>
      {
        days > 0 ? (
          <div className="summary">
            Yhteensä <strong>{days}</strong> vuorokautta.<br />
            <div className="total-price">
            Hinta yhteensä <strong>{product.price * days}</strong> euroa.
            </div>
          </div>
        ) : (<></>)
      }
      <button onClick={() => {
        handleSubmit();
      }}>Tee varaus</button>
      <button onClick={() => navigate(-1)}>Palaa takaisin</button>
    </div>
  )
}

export default ProductReservation;