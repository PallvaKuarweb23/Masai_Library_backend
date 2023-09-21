const express = require("express");

const { loginUser } = require("../Controller/User.cont/login"); 
const {registerController}=require("../Controller/User.cont/user.cont")
const {userGet}=require("../Controller/User.cont/user.get")

const userRouter = express.Router();

userRouter.post("/api/register", registerController);

userRouter.post("/api/login", loginUser); 

userRouter.get("/getRegister", userGet)

module.exports = {
  userRouter
};
