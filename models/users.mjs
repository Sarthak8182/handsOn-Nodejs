import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    username : String,
    email : String,
    password : { required: true, type: String}
})

export const UserModel = mongoose.model("Users", UserSchema, "users")