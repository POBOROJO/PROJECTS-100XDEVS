const { JWT_SECRET } = require("../config");
const { jwt } = require("jsonwebtoken");
const { User } = require("../models/User");
const { zod } = require("zod");

const signUpValidation = zod.object({
  username: zod.string().min(3).max(20),
  email: zod.string().email(),
  firstName: zod.string().min(3),
  lastName: zod.string().min(3),
  password: zod.string().min(6),
});

export const Signup = async (req, res) => {
  const body = req.body;

  const { success } = signUpValidation.safeParse(body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = await User.findOne({
    email: body.email,
  });

  if (user._id) {
    return res.status(411).json({
      message: "Email already taken ",
    });
  }

  const newUser = await User.create(body);
  const token = jwt.sign(
    {
      userId: newUser._id,
    },
    JWT_SECRET
  );

  res.status(200).json({
    message: "User created successfully",
    token: token,
  });
};

const signInValidation = zod.object({
  username: zod.string().email().min(3),
  password: zod.string().min(6),
});

export const Signin = async (req, res) => {
  try {
    const body = req.body;
    const { success } = signInValidation.safeParse(body);

    if (!success) {
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
