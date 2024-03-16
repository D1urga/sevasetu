import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: ["Set-Cookie"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/user.routes.js";
import schemeRouter from "./routes/scheme.routes.js";
import anonComplaintRouter from "./routes/anoncomplaint.routes.js";
import complaintRouter from "./routes/complaint.routes.js";
import womenEmpRouter from "./routes/womenEmpowerment.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/schemes", schemeRouter);
app.use("/api/v1/anonComplaint", anonComplaintRouter);
app.use("/api/v1/complaint", complaintRouter);
app.use("/api/v1/womenEmp", womenEmpRouter);

export { app };
