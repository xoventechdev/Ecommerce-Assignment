import { DecodeToken } from "../utility/AuthHelper.js";

export const AuthVerified = (req, res, next) => {
  let token = req.headers.token;
  if (!token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({
      status: 'warning',
      message: "You are unauthorized. Please, try with valid token.",
    });
  }

  const decoded = DecodeToken(token);
  if (!decoded) {
    return res.status(401).json({
      status: 'warning',
      message: "You are unauthorized. Please, try with valid token.",
    });
  }

  req.email = decoded.email;
  req.user_id = decoded.user_id;
  next();
};
