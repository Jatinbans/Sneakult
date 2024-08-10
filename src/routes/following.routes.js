import express from 'express'
import { 
    followUser,
    unfollowUser,
    getFollowing,
    getFollowers,
    isFollowing,

} from '../controllers/following.controllers.js'

const router = express.Router();


router.put('/following/:id',followUser)
router.delete('/following/:id',unfollowUser)
router.get('/following/:id',getFollowing)
router.get('/followers/:id',getFollowers)
router.get('/following/:id/is-following',isFollowing)

export default router;