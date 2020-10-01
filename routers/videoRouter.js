// /videos 라우터
import routes from "../routes.js";
import express from "express";
import {
  videos,
  upload,
  videoDetail,
  videoEdit,
  videoDelete,
} from "../controllers/videoController.js";

const videoRouter = express();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.videoEdit, videoEdit);
videoRouter.get(routes.videoDelete, videoDelete);

export default videoRouter;
