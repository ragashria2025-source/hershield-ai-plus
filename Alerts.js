const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

try {
  if (!admin.apps.length) admin.initializeApp();
} catch(e){}

router.post("/save", async (req, res) => {
  const data = req.body;
  try {
    if (admin.apps.length) {
      const db = admin.firestore();
      await db.collection("alerts").add({ ...data, createdAt: admin.firestore.FieldValue.serverTimestamp() });
      return res.json({ ok: true });
    } else {
      return res.json({ ok: true, warning: "Firebase admin not initialized" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok:false, error: err.message });
  }
});

module.exports = router;
