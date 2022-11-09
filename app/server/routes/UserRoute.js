import express from "express";
import { getUser, updateUser, deleteUser } from "../controllers/UserController.js";

const router = express.Router();

router.get('/:id', getUser)
//put : to update a user
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


export default router;