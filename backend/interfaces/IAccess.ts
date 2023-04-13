export interface IAccess {
  id: number,
  user_id: number,
  level: AccessLevel
}
enum AccessLevel {
  "Admin" = 0,
  "Employee" = 10,
  "User" = 100
}