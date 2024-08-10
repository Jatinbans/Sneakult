import reviewRoutes from './review.routes.js'
import postRoutes from './post.routes.js'
import listRoutes from './list.routes.js'
import paymentRoutes from './payments.routes.js'
import userRoutes from './user.routes.js'
import followerRoutes from './followers.route.js'
import followingRoutes from './following.routes.js'

import { Router } from 'express'

const router = Router();
router.use('/reviews', reviewRoutes);
router.use('/posts', postRoutes);
router.use('/listings', listRoutes);
router.use('/payments', paymentRoutes);
router.use('/users', userRoutes);
router.use('/followers', followerRoutes);
router.use('/following', followingRoutes);

export default router;
