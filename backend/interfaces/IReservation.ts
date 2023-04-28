export interface IReservation {
  id?: number,
  productId: number,
  customerId: number,
  employeeId: number | null,
  startAt: string,
  endAt: string,
  confirmed: boolean,
  completed: boolean,
}