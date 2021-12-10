import express from "express";
import controller from "../controllers/AdminController";

const router = express.Router();

router.get("/getAllUser", controller.getAllUser);
router.get("/getAllComment", controller.getAllComment);
router.get("/deleteCommentById/:commentId", controller.deleteCommentById);
router.get("/deleteUserById/:userId", controller.deleteUserById);

export default router;