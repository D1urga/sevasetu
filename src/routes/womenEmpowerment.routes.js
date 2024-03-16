import { Router } from "express";
import {
  getWomenEmp,
  postWomenEmp,
} from "../controllers/womenempowerment.controllers.js";

const router = Router();

router.route("/postWomenEmp").post(postWomenEmp);
router.route("/getWomenEmp").get(getWomenEmp);

export default router;
