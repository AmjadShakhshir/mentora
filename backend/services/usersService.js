import bcrypt from 'bcryptjs';

import User from '../models/userModel.js';

const signUp = async (
    name,
    email,
    password,
    role
) => {
    const hashedPassword = await bcrypt.genSalt(10).then(salt => bcrypt.hash(password, salt));
    const user = new User({ name, email, password: hashedPassword, role });
    if (!user) {
        return null;
    }
    await user.save();
    return user;
};

const signIn = async (
    email,
    password
) => {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
        return null;
    }
    
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
        return null;
    }  
    
    return foundUser;
};

const setPassword = async (
    user,
    password
) => {
    const hashedPassword = await bcrypt.genSalt(10).then(salt => bcrypt.hash(password, salt));
    user.password = hashedPassword;
    return await user.password;
};

const usersService = {
    signUp,
    signIn,
    setPassword
};

export default usersService;