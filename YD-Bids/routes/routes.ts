import express from "express";
const router = express.Router();
import { signUp, login, test} from "../controllers/controller";

router
    .post("/sign-up", signUp)
    .get("/login", login)
    .get("/test", test);

export default router;
