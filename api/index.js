import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("몽고DB 연결 성공~!~!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("포트 3000에서 서버가 작동하고 있습니다.");
});

// app.get("/test", (req, res) => {
//     res.json({ message: "API가 작동되고 있습니다." });
// });

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
