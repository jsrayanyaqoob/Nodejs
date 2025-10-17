import mongoose from 'mongoose';
const { Schema } = mongoose;

const customerSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  age: Number,
  address: String,
  phone_number: [String]
});

const schema = new Schema(customerSchema);
const Customer = mongoose.model('Customer', schema);

// const Customer = new Model(customerModel)

export default Customer
// module.exports = {
//   Customer
// }