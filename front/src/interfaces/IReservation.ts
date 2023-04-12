export interface IReservation {
  id?: number,
  product_id: number,
  user_id: number,
  created_at?: Date,
  start_date: Date,
  end_date?: Date,
  is_valid: boolean,
  is_payed: boolean,
}