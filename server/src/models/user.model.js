import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    userId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false
    }
});

userSchema.statics.isPasswordMatch = async (password, storedPassword) => {
    return await bcrypt.compare(password, storedPassword);
}

const User = mongoose.model('user', userSchema);

export default User;