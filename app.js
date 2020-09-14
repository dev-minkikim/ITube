import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import globalRouter from "./routers/globalRouter.js";
import helmet from "helmet";
import morgan from "morgan";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";

const app = express();

app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/videos", videoRouter);
export default app;
