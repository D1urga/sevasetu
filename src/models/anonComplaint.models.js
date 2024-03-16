import mongoose from "mongoose";

const AnonComplaintSchema = new mongoose.Schema(
  {
    owner: {
      type: String,
    },
    title: {
      type: String,
    },
    note: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true },
);

export const AnonComplaint = mongoose.model(
  "AnonComplaint",
  AnonComplaintSchema,
);
