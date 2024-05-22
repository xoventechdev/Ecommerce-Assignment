import UserModel from "../models/UserModel.js";
import SendMail from "../utility/EmailSender.js";
import { EncodeToken } from "../utility/AuthHelper.js";

export const OTPRequest = async (req) => {
  try {
    const { email } = req.params;
    const otp = Math.floor(100000 + Math.random() * 900000);
    const subject = "User login OTP";
    const message = "Your requested OTP is: " + otp;
    await SendMail(email, subject, message);
    await UserModel.updateOne({ email: email }, { otp: otp }, { upsert: true });
    return {
      status: "success",
      response: `OTP sent to ${email} successfully. Please check your email inbox.`,
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to send OTP. Please, try again.",
    };
  }
};

export const OTPVerified = async (req) => {
  try {
    const { email, otp } = req.params;
    const user = await UserModel.findOne({ email: email });
    if (user.otp === otp) {
      const token = EncodeToken(email, user._id);
      await UserModel.updateOne({ email: email }, { otp: "" });
      return {
        status: "success",
        response: "OTP verified successfully.",
        token: token,
      };
    } else {
      return {
        status: "error",
        response: "Invalid OTP.",
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      response: "Failed to verified your OTP. Please, try again.",
    };
  }
};
