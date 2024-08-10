import express from 'express'
import { 
    followUser,
    unfollowUser,
    getFollowers,
    getFollowing,
    isFollowing,

} from '../controllers/followers.controllers.js';
const router = express.Router()

router.put('/followers/:id',followUser)
router.delete('/followers/:id',unfollowUser)
router.get('/followers/:id',getFollowers)
router.get('/following/:id',getFollowing)
router.get('/followers/:id/is-following',isFollowing)

export default router;