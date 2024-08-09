import express from "express";
import { 
    createUser ,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,

} from "../controllers/user.controllers.js";
const router = express.Router();
router.post('/user',createUser)
router.get('/user',getAllUsers)
router.get('/user/:id',getUserById)
router.put('/user/:id',updateUserById)
router.delete('/user/:id',deleteUserById)
export default router;