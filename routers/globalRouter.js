//  "/"  Home 라우터
import express from "express";

const globalRouter = express();

globalRouter.get("/", (req, res) => res.send("홈"));
globalRouter.get("/join", (req, res) => res.send("회원가입"));
globalRouter.get("/login", (req, res) => res.send("로그인"));
globalRouter.get("/logout", (req, res) => res.send("로그아웃"));
globalRouter.get("/search", (req, res) => res.send("검색"));

export default globalRouter;
