//  "/"  Home 라우터
import routes from "../routes.js";
import express from "express";
import {
  home,
  join,
  login,
  logout,
  search,
} from "../controllers/globalController.js";

const globalRouter = express();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
