import Customer from "./customer";
import User from "./user";

Customer.hasOne(User);
User.belongsTo(Customer);


export default { User };