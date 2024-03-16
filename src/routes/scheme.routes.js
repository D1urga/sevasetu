import { Router } from "express";
import { getScheme, postScheme } from "../controllers/scheme.controllers.js";

const router = Router();

router.route("/postScheme").post(postScheme);
router.route("/getScheme").get(getScheme);

export default router;
