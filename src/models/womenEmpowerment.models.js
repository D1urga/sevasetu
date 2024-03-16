import mongoose from "mongoose";

const WomenEmpowermentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true },
);

export const WomenEmpowerment = mongoose.model(
  "WomenEmpowerment",
  WomenEmpowermentSchema,
);
