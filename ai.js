const express = require("express");
const router = express.Router();

router.post("/safe-score", (req, res) => {
  const score = 60 + Math.floor(Math.random() * 40);
  res.json({ score, reason: "Mock safe score for demo" });
});

router.post("/voice-detect", (req, res) => {
  const distress = Math.random() < 0.2;
  res.json({ distress, confidence: distress ? 0.85 : 0.12 });
});

module.exports = router;
