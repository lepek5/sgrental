export interface IUser {
  id?: number,
  email: string
};
export interface IUserLogin extends IUser {
  password: string
}