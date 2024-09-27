import mongoose, {Document, Schema} from "mongoose";

interface IUser extends Document {
    email: string;
    password: string; // This should be hashed
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export default mongoose.model<IUser>('User', UserSchema);