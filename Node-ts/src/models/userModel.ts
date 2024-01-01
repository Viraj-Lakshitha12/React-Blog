import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    username: string;
    f_name: string;
    l_name: string;
    email: string;
    password: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
    username: { type: String, required: true },
    f_name: { type: String, required: true },
    l_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const userModel = mongoose.model<IUser>("User", userSchema);
export default userModel;
