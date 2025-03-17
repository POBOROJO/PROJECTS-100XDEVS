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
    return res.json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = User.findOne({
    username: body.username,
  });

  if (user._id) {
    return res.json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const newUser = await User.create(body);
  const token = jwt.sign(
    {
      userId: newUser._id,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
};
