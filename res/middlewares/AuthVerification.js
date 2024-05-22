import { DecodeToken } from "../utility/AuthHelper.js";
module.exports = (req, res, next) => {
  let token = req.headers.token;
  if (!token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized. Token is required.",
    });
  }

  const decoded = DecodeToken(token);
  if (!decoded) {
    return res.status(401).json({
      message: "Unauthorized. Token is invalid.",
    });
  }

  req.email = decoded.email;
  req.user_id = decoded.user_id;
  next();
};
