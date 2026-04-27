const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET = process.env.JWT_SECRET || "nfc_secret";

app.use(cors());
app.use(express.json());

const users = [
  { id: "101", name: "Suhas", role: "student", authorized: true },
  { id: "102", name: "Ananya", role: "student", authorized: false },
  { id: "201", name: "Professor Rao", role: "teacher", authorized: true }
];

const logs = [];

app.get("/", (_req, res) => {
  res.json({
    name: "NFC Smart Parking API",
    status: "running",
    endpoints: ["/login", "/scan?id=101", "/users", "/logs"]
  });
});

app.post("/login", (req, res) => {
  const { username } = req.body;

  if (!username || !String(username).trim()) {
    return res.status(400).json({ message: "Username is required" });
  }

  const token = jwt.sign({ username: String(username).trim() }, SECRET, {
    expiresIn: "1h"
  });

  return res.json({
    message: "Login successful",
    token
  });
});

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Access denied" });
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ message: "Invalid authorization format" });
  }

  return jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.user = decoded;
    return next();
  });
}

app.get("/scan", (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: "NFC user id is required" });
  }

  const user = users.find((entry) => entry.id === id);
  const authorized = Boolean(user && user.authorized);

  const logEntry = {
    id,
    time: new Date().toISOString(),
    status: authorized ? "GRANTED" : "DENIED"
  };

  logs.unshift(logEntry);

  if (authorized) {
    return res.json({
      message: "Access Granted - Gate Opening",
      gate: "OPEN",
      user,
      log: logEntry
    });
  }

  return res.json({
    message: "Access Denied",
    gate: "CLOSED",
    log: logEntry
  });
});

app.get("/users", verifyToken, (_req, res) => {
  res.json(users);
});

app.get("/logs", verifyToken, (_req, res) => {
  res.json(logs);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
