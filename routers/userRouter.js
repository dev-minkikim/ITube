// /user 라우터
import express from "express";
const userRouter = express();

userRouter.get("/", (req, res) => res.send("userIndex"));
userRouter.get("/edit", (req, res) => res.send("Edit"));
userRouter.get("/password", (req, res) => res.send("password"));

export default userRouter;
