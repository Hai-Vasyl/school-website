import { Schema, model, Types } from "mongoose"

const schema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  ava: {
    type: String,
    default: "",
  },
  color: { type: String, required: true, default: "" },
  confirmed: { type: Boolean, required: true, default: "false" },
  firstname: { type: String, default: "", required: true },
  lastname: { type: String, default: "", required: true },
  middlename: { type: String, default: "" },
  phone: { type: String, default: "" },
  address: { type: String, default: "" },
  birth: { type: Date, default: "" },
  encrpassword: { type: String, required: true },
  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["user", "admin", "teacher"],
  },
  date: { type: Date, required: true },
})

export default model("User", schema)
