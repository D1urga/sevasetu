import { Router } from "express";
import { postComplaint } from "../controllers/complaint.controllers.js";

const router = Router();

router.route("/postComplaint/:owner").post(postComplaint);

export default router;
