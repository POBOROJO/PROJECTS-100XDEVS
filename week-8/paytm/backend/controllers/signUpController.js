const { JWT_SECRET } = require("../config");
const { jwt } = require("jsonwebtoken");
const { User } = require("../models/User");
const { zod } = require("zod");

const signUpValidation = zod.object({
  username: zod.string().min(3).max(20),
  email: zod.string().email(),
  firstName: zod.string().min(3),
  lastName: zod.string().min(3),
  password: zod.string().password(),
});

export const Signup = async (req, res) => {
  const body = req.body;

  const { success } = signUpValidation.safeParse(body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = User.findOne({
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
