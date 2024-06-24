import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
  },
});

const Driver = mongoose.model("Driver", driverSchema);

export default Driver;
