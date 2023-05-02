import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import reservationService from "../services/reservation.service";
import { UserContext } from "../utils/use-auth";

const ReservationDetails: React.FC = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const update = useMutation(async (payload: any) => {
    return await reservationService.updateReservation(payload);
  }, {
    onSuccess: () => { 
      queryClient.invalidateQueries("reservations");
      alert("Muutokset tallennettu");
    }
  });
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const { data: reservation, isLoading, isFetching } = useQuery(["reservations", id], async () => {
    return await reservationService.getById(id);
  });
  const [status, setStatus] = useState({ confirmed: false, completed: false });
  useEffect(() => {
    setStatus(prev => ({
      ...prev,
      confirmed: reservation?.confirmed,
      completed: reservation?.completed
    }));
  }, [reservation]);
  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    const { id: key, checked } = e.target;
    setStatus(prev => ({...prev, [key]: checked}));
  }
  
  if (isLoading || isFetching) return (<>Lataan...</>);
  const handleSave = () => {
    const request = {
      id: reservation.id,
      endAt: reservation.endAt,
      startAt: reservation.startAt,
      confirmed: status.confirmed,
      completed: status.completed,
      employeeId: user.id,
      productId: id
    }
    update.mutateAsync(request);
  }
  console.log("reservations", reservation)
  return (
    <div className="reservation-details">
      <div className="id">
        Reservation ID {reservation?.id}
      </div>
      <div className="product">
        Tuote: {reservation?.product?.title}
      </div>
      <div className="customer">
        <ul>
          <li>Nimi: {reservation?.customer?.name}</li>
          <li>Sähköposti: {reservation?.customer?.user.email}</li>
        </ul>
      </div>
      <div className="dates">
        <ul>
          <li>Alkaa {reservation?.startAt}</li>
          <li>Päättyy {reservation?.endAt}</li>
        </ul>
      </div>
      <div className="status">
        <ul>
          <li>
            <label htmlFor="confirmed">Hyväksytty:</label> <input onChange={handleCheckBox} id="confirmed" checked={status.confirmed || false} type="checkbox" />
          </li>
          <li>
            <label htmlFor="completed">Maksettu:</label> <input onChange={handleCheckBox} id="completed" checked={status.completed || false} type="checkbox" />
          </li>
        </ul>
      </div>
      <div className="buttons">
        <button onClick={handleSave}>Tallenna muutokset</button>
        <button onClick={() => navigate(-1)}>Takaisin</button>
      </div>
    </div>
  )
}

export default ReservationDetails;