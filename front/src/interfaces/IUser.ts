export interface IUser {
  id: number,
  email: string
}
export interface IUserLogin extends IUser {
  password: string
}

export interface IUserToken extends IUser {
  token?: string
}