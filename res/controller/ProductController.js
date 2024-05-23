import { ViewBrandList } from "../services/ProductServices.js";

export const ProductBrandList = async (req, res) => {
  const list = await ViewBrandList();
  return res.status(200).json(list);
};
