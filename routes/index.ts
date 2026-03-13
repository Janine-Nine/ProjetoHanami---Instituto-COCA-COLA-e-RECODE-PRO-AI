import { Router } from 'express';
import authRoutes from './authRoutes';
import uploadRoutes from './uploadRoutes';
import reportRoutes from './reportRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/upload', uploadRoutes);
router.use('/reports', reportRoutes);

export default router;
