import mongoose from 'mongoose';
const { Schema } = mongoose;

const managerSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  age: Number,
  address: String,
  salary: Number,
  phone_number: [String]
});

const schema = new Schema(managerSchema);
const Manager = mongoose.model('Manager', schema);

// const Customer = new Model(customerModel)

export default Manager
// module.exports = {
//   Customer
// }