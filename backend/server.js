import express from "express";
import dotenv from "dotenv";
//
import { connectDB } from "./config/connectDB.js";
import authRoutes from "./routes/auth.route.js";
//

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows us to parse incoming requests from req.body
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(
    `server is listening on port ${PORT} and use url http://localhost:${PORT}`
  );
});
