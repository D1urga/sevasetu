import { Complaint } from "../models/complaint.models.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const postComplaint = asyncHandler(async (req, res) => {
  const { owner } = req.params;
  const { title, description, category, issueType, sector } = req.body;
  const data = await Complaint.create({
    owner,
    title,
    description,
    category,
    issueType,
    sector,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data post successfully"));
});

export { postComplaint };
