import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema(
  {
    brandName: {
      type: "string",
      required: true,
    },
    brandImg: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const BrandModel = mongoose.model("brand", BrandSchema);
export default BrandModel;
