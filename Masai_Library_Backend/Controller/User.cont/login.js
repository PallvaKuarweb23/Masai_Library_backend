const { UserModel } = require("../../Model/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required fields." });
    }

    const user = await UserModel.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ foo: "bar" }, "shhhhh");
          res.status(201).json({ msg: "Login Successful", token: token });
        } else {
          res.status(200).json({ msg: "Invalid Password" });
        }
      });
    } else {
      res.status(200).json({ msg: "Invalid Email" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong", error: err.message });
  }
}

module.exports = {
  loginUser
};
