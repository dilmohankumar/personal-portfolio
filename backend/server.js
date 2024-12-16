const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

const crypto = require("crypto");
const Razorpay = require("razorpay");
const messageRoutes = require("./models/model.js");
const MentorshipRouter = require("./models/mentormodel.js");
const startupRouter = require("./models/startupmodel.js");
const projectRouter = require("./models/projectmodel.js");
const collectionsRoute = require("./models/allcollectionmodel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const authRoutes = require("./models/Auth.js");
const loginRoute = require("./models/Authlogin");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api/message", messageRoutes);
app.use("/api", MentorshipRouter);
app.use("/api/startup", startupRouter);
app.use("/api/project", projectRouter);
app.use("/", collectionsRoute);
app.use("/api/signup", authRoutes);
app.use("/api", loginRoute);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.post("/order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = req.body;
    const order = await razorpay.orders.create(options);
    if (!order) {
      return res.status(500).send("Error creating order");
    }
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error processing request");
  }
});

app.post("/order/validate", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");
  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: "Transaction is not legit!" });
  }
  res.json({
    msg: "success",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
