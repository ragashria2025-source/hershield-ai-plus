const admin = require("firebase-admin");
const path = require("path");

const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || path.join(__dirname, "serviceAccountKey.json");

try {
  admin.initializeApp({
    credential: admin.credential.cert(require(serviceAccountPath))
  });
} catch (e) {
  console.error("Provide valid service account JSON at backend/seed/serviceAccountKey.json or set GOOGLE_APPLICATION_CREDENTIALS");
  process.exit(1);
}

const db = admin.firestore();

async function seed(){
  console.log("Seeding Firestore...");
  const safeSpots = [
    { name: "24/7 Grocery - Safe Spot", lat: 11.0, lng: 78.0, type: "shop" },
    { name: "Police Booth - Safe Spot", lat: 11.001, lng: 78.002, type: "police" },
    { name: "Community Center - Safe Spot", lat: 11.002, lng: 78.001, type: "community" }
  ];
  for (const s of safeSpots) await db.collection("safeSpots").add(s);
  const sampleUsers = [
    { name: "Ragashri", role: "Mechanical (Lead)", phone: "+91XXXXXXXXXX" },
    { name: "Dev A", role: "Computer Science" },
    { name: "Dev B", role: "IT" },
    { name: "Dev C", role: "AI/DS" }
  ];
  for (const u of sampleUsers) await db.collection("users").add(u);
  console.log("Seed complete.");
  process.exit(0);
}

seed().catch(err=>{ console.error(err); process.exit(1); });
