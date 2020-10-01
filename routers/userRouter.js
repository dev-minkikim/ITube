// /user 라우터
import routes from "../routes.js";
import express from "express";
import {
  user,
  userEdit,
  changePassword,
  profile,
} from "../controllers/userController.js";

const userRouter = express();

userRouter.get(routes.user, user);
userRouter.get(routes.editProfile, userEdit);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.profile, profile);
export default userRouter;
