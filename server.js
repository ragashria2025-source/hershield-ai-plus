const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");
const aiRoutes = require("./routes/ai");
const alertsRoutes = require("./routes/alerts");
const twilioRoutes = require("./routes/twilio");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/ai", aiRoutes);
app.use("/api/alerts", alertsRoutes);
app.use("/api/twilio", twilioRoutes);

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Client connected", socket.id);
  socket.on("triggerSOS", (payload) => {
    const alert = { type: "SOS", timestamp: Date.now(), ...payload };
    io.emit("newAlert", alert);
  });
  socket.on("triggerUnsafe", (payload) => {
    const alert = { type: "UNSAFE", timestamp: Date.now(), ...payload };
    io.emit("newAlert", alert);
  });
});

app.set("io", io);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Backend running on ${PORT}`));
