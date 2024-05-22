import { OTPRequest, OTPVerified } from "../services/UserServices.js";

export const UserOTPRequest = async (req, res) => {
  const response = await OTPRequest(req);
  res.status(200).json(response);
};

export const UserOTPVerified = async (req, res) => {
  const response = await OTPVerified(req);
  if (response.status === "success") {
    res.cookie("token", response.token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });
  }
  res.status(200).json(response);
};
