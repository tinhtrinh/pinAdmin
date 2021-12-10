import express from "express";
import controller from "../controllers/AdminController";

const router = express.Router();

router.get("/getAllUser", controller.getAllUser);
router.get("/getAllComment", controller.getAllComment);

export default router;