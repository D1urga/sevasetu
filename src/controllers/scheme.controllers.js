import { Scheme } from "../models/scheme.models.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const postScheme = asyncHandler(async (req, res) => {
  const { title, category, description } = req.body;
  const data = await Scheme.create({ title, category, description });
  return await res
    .status(200)
    .json(new ApiResponse(200, data, "data posted successfully"));
});

const getScheme = asyncHandler(async (req, res) => {
  const data = await Scheme.find({});
  return await res
    .status(200)
    .json(new ApiResponse(200, data, "data fetched successfully"));
});

export { postScheme, getScheme };
