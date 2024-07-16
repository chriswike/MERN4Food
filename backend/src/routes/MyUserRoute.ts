import express from "express"
import MyUserController from "../controllers/MyUserController";


const router = express.Router();

//pass any post rquest to app/my/user
router.post("/", MyUserController.createCurrentUser);

export default router
