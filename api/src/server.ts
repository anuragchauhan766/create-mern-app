//built in imports
import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// local imports
import router from "./router/index.js";
import errorHandler from "./middleware/errorHandler.js";
import "./db/connect.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api", router);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
