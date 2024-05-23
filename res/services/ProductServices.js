import { response } from "express";
import BrandModel from "../models/BrandModel.js";
import CategoryModel from "../models/CategoryModel.js";
import ProductSliderModel from "../models/ProductSliderModel.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

export const ViewBrandList = async () => {
  try {
    const viewBrand = await BrandModel.aggregate([
      {
        $project: {
          createdAt: 0,
          updatedAt: 0,
        },
      },
    ]);
    return { status: "success", response: viewBrand };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to get brand list. Please, try again.",
    };
  }
};

export const ViewCategoryList = async () => {
  try {
    const ViewCategory = await CategoryModel.aggregate([
      {
        $project: {
          createdAt: 0,
          updatedAt: 0,
        },
      },
    ]);
    return { status: "success", response: ViewCategory };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to get category list. Please, try again.",
    };
  }
};

export const ViewSliderList = async () => {
  try {
    const ViewSlider = await ProductSliderModel.aggregate([
      {
        $project: {
          createdAt: 0,
          updatedAt: 0,
        },
      },
    ]);
    return { status: "success", response: ViewSlider };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to get slider list. Please, try again.",
    };
  }
};

export const ViewProductByBrand = async (req) => {
  try {
    const BrandID = new ObjectId(req.params.BrandID);
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to get product list based on brand. Please, try again.",
    };
  }
};
