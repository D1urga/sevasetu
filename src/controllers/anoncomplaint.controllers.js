import { AnonComplaint } from "../models/anonComplaint.models.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const postAnonComplaint = asyncHandler(async (req, res) => {
  const { owner } = req.params;
  const { title, note, description } = req.body;
  const data = await AnonComplaint.create({ owner, title, note, description });
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data post successfully"));
});

export { postAnonComplaint };
