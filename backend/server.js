import express from "express";

//
import { connectDB } from "./config/connectDB.js";
import authRoutes from "./routes/auth.route.js";
//
const app = express();

app.get("/", (req, res) => {
  res.send("hello World");
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDB();
  console.log(
    "server is listening on port 3000 and use url http://localhost:3000"
  );
});
