import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Fungerar");
});

app.listen(PORT, () => {
  console.log(`server körs på http://localhost:${PORT}`);
});
