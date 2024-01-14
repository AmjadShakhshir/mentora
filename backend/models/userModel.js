import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true,
        default: 'user'
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;