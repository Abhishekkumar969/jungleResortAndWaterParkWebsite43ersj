const Razorpay = require("razorpay");
const { defineSecret } = require("firebase-functions/params");
const { onRequest } = require("firebase-functions/v2/https");

const razorpayKey = defineSecret("RAZORPAY_KEY");
const razorpaySecret = defineSecret("RAZORPAY_SECRET");

exports.createRazorpayOrder = onRequest(
  {
    secrets: ["RAZORPAY_KEY", "RAZORPAY_SECRET"],
  },
  async (req, res) => {

    // ✅ CORS headers (FIRST THING)
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    // ✅ HANDLE PREFLIGHT
    if (req.method === "OPTIONS") {
      return res.status(204).send("");
    }

    try {
      let body = req.body;

      if (!body || Object.keys(body).length === 0) {
        try {
          body = JSON.parse(req.rawBody.toString());
        } catch (e) {
          body = {};
        }
      }

      const { amount } = body;

      console.log("FINAL BODY:", body);
      console.log("AMOUNT:", amount);

      if (!amount) {
        return res.status(400).json({ error: "Amount required" });
      }

      const razorpay = new Razorpay({
        key_id: razorpayKey.value(),
        key_secret: razorpaySecret.value(),
      });

      const order = await razorpay.orders.create({
        amount: amount * 100,
        currency: "INR",
        receipt: "receipt_" + Date.now(),
      });

      return res.json(order);

    } catch (err) {
      console.error("FULL ERROR:", err?.error || err);
      return res.status(500).json({ error: "Failed to create order" });
    }
  }
);