import dotenv from "dotenv";

dotenv.config();
import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/payment.js";
import { Cashfree } from "cashfree-pg";

Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.CLIENT_SECRET;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", paymentRoutes);
app.use("/healthz", (req, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
