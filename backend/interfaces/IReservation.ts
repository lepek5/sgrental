export interface IReservation {
  id?: number,
  product_id: number,
  user_id: number,
  employee_id: number,
  created_at?: string,
  start_at: string,
  end_at?: string,
  confirmed: boolean,
  completed: boolean,
}
