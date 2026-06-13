const express = require("express");
const router = express.Router();

/**
 * POST /api/twilio/send
 * body: { to, message }
 * This is a placeholder. For production, install twilio and use account SID/auth token from env.
 */
router.post("/send", async (req, res) => {
  const { to, message } = req.body;
  console.log("Twilio placeholder send to", to, message);
  // In production: use Twilio SDK to send SMS
  return res.json({ ok: true, info: "Twilio placeholder — implement with real credentials" });
});

module.exports = router;
