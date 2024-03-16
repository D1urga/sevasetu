import { Router } from "express";
import { postAnonComplaint } from "../controllers/anoncomplaint.controllers.js";

const router = Router();

router.route("/postAnonComplaint/:owner").post(postAnonComplaint);

export default router;
