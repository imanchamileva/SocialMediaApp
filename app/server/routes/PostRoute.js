import express from "express";
import { createPost, getPost, updatePost } from "../controllers/PostController.js";
const router = express.Router();


router.post('/', createPost)
router.get('/:id',getPost)
router.put('/:id', updatePost)


export default router;
