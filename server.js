require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Schema
const projectSchema = new mongoose.Schema({
  namaprojek: { type: String, required: true },
  deskripsi: String,
  type: String,
  status: String,
  link: String,
  startingAt: Date
});
const Project = mongoose.model("Project", projectSchema);

// Routes
app.get("/", (req, res) => {
  res.send("API Connected");
});

app.get("/projects", async (req, res, next) => {
  try {
    const { status, type } = req.query;
    const query = {};
    if (status) query.status = status;
    if (type) query.type = type;

    const projects = await Project.find(query).sort({ startingAt: -1 });
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

// MongoDB connect (jangan pakai app.listen di Vercel)
if (!mongoose.connection.readyState) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => {
      console.error("MongoDB error:", err);
      process.exit(1);
    });
}

// ❌ Hilangkan app.listen()
// ✅ Export app supaya Vercel handle serverless
module.exports = app;
