import express from "express";
import { getUser, updateUser, deleteUser, followUser, UnFollowUser } from "../controllers/UserController.js";

const router = express.Router();

router.get('/:id', getUser)
//put : to update a user
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnFollowUser)



export default router;