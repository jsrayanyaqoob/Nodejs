import mongoose from 'mongoose';
import { stringify } from 'querystring';
const { Schema } = mongoose;

const shareHoldersSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  age: Number,
  email: String,
  address: {
    city: String,
    street: String, 
    postalCode: Number
  },
  shares: {
    shares_holding: Number, 
    ownership_percentage: String,
  },
  phone_number: [String]
});

const schema = new Schema(shareHoldersSchema);
const shareHolders = mongoose.model('share holders', schema);

// const Customer = new Model(customerModel)

export default shareHolders
// module.exports = {
//   Customer
// }