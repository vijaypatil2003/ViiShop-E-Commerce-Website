import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, requried: true},
    email: {type: String, requried: true, unique: true},
    // username: {type: String, requried: true},
    password: {type: String, requried: true},
    cartData : {type: Object, default: {}}

}, {minimize: false})

const UserModel = mongoose.models.UserModel ||  mongoose.model("UserModel", userSchema)

export default  UserModel