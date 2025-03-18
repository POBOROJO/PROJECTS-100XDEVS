import { JWT_SECRET } from "../config";
import { User } from "../models/User";
const { jwt } = require("jsonwebtoken");

const { zod } = request("zod");

const signInValidation = zod.object({
  email: zod.string().email(),
  password: zod.string().password(),
});

export const Signin = async (req, res) => {
  try {
    const body = req.body;
    const { succes } = signInValidation.safeParse(body);

    if (!succes) {
      return res.status(411).json({
        message: "Inputs are not valid",
      });
    }

    const user = await User.findOne({
      username: body.username,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );
    return res.status(200).json({
      message: "User logged in successfully",
      token: token,
    });
  } catch (error) {
    console.error("Sigin in error :", error);
    return res.status(500).json({
      message: "Error while logging in",
    });
  }
};
