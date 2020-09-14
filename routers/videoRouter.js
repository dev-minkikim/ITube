// /videos 라우터
import express from "express";

const videoRouter = express();

videoRouter.get("/", (req, res) => res.send("videos"));
videoRouter.get("/upload", (req, res) => res.send("video Upload"));
videoRouter.get("/:id", (req, res) => res.send("video-edit"));
videoRouter.get("/:id/edit", (req, res) => res.send("video 수정"));
videoRouter.get("/:id/delete", (req, res) => res.send("비디오 삭제"));

export default videoRouter;
