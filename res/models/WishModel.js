import mongoose from "mongoose";

const WishSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const WishModel = mongoose.model("wishes", WishSchema);
export default WishModel;
