import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema(
  {
    owner: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    issueType: {
      type: String,
    },
    sector: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Complaint = mongoose.model("Complaint", ComplaintSchema);
