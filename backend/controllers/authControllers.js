import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateVerificationCode } from "../utils/generateVerificationCode.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";


export const signUp = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken=generateVerificationCode();
    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, //24hrs
      verificationToken,
    });
    await user.save();

    //jwt
    generateTokenAndSetCookie(res,user._id)
    res.status(200).json({success:true,message:"Sign Up successful",
      user:{
        ...user._doc,
        password:undefined
      }
    })

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  res.send("Login Route");
};

export const logout = async (req, res) => {
  res.send("logout Route");
};
