import { WomenEmpowerment } from "../models/womenEmpowerment.models.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const postWomenEmp = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const data = await WomenEmpowerment.create({ title, description });
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data post successfully"));
});

const getWomenEmp = asyncHandler(async (req, res) => {
  const data = await WomenEmpowerment.find({});
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data post successfully"));
});

export { postWomenEmp, getWomenEmp };
