import mongoose from "mongoose";

const SchemeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Scheme = mongoose.model("Scheme", SchemeSchema);
