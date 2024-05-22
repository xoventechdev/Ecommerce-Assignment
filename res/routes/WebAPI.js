import { Router } from "express";
import {
  UserOTPRequest,
  UserOTPVerified,
} from "../controller/UserController.js";

const router = Router();

// Product Related API
router.get("/ProductBrandList");
router.get("/ProductCategoryList");
router.get("/ProductSliderList");
router.get("/ProductListByBrand/:BrandID");
router.get("/ProductListByCategory/:CategoryID");
router.get("/ProductListBySmilier/:CategoryID");
router.get("/ProductListByKeyword/:Keyword");
router.get("/ProductListByRemark/:Remark");
router.get("/ProductDetails/:ProductID");
router.get("/ProductReviewList/:ProductID");

// User Related API
router.get("/UserOTP/:email", UserOTPRequest);
router.get("/VerifyLogin/:email/:otp", UserOTPVerified);
router.get("/UserLogout");
router.post("/CreateProfile");
router.post("/UpdateProfile");
router.get("/ReadProfile");

// Wish List Related API
router.post("/SaveWishList");
router.post("/RemoveWishList");
router.get("/WishList");

// Cart List Related API
router.post("/SaveCartList");
router.post("/RemoveCartList");
router.get("/CartList");

export default router;
