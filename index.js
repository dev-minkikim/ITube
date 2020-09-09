import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 7000;

const homeHandler = (req, res) => {
  res.send("Hello!");
};
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", homeHandler);
const startServer = () => console.log(`✅ Server on http://localhost:${PORT}`);
app.listen(PORT, startServer);
