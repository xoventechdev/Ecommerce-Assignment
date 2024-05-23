import { Router } from "express";
import {
  ReadProfile,
  SaveProfile,
  UserLogout,
  UserOTPRequest,
  UserOTPVerified,
} from "../controller/UserController.js";
import { AuthVerified } from "../middlewares/AuthVerification.js";
import { ProductBrandList } from "../controller/ProductController.js";

const router = Router();

// Product Related API
router.get("/ProductBrandList", AuthVerified, ProductBrandList);
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
router.get("/UserLogout", UserLogout);
router.post("/CreateProfile", AuthVerified, SaveProfile);
router.post("/UpdateProfile", AuthVerified, SaveProfile);
router.get("/ReadProfile", AuthVerified, ReadProfile);

// Wish List Related API
router.post("/SaveWishList");
router.post("/RemoveWishList");
router.get("/WishList");

// Cart List Related API
router.post("/SaveCartList");
router.post("/RemoveCartList");
router.get("/CartList");

export default router;
