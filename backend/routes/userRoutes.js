import express from 'express';

import { registerUser } from '../controllers/users/register.js';
import { authUser , logoutUser } from '../controllers/users/login.js';
import { getUserProfile, updateUserProfile } from '../controllers/users/profile.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;