require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors()); //check aman
app.use(express.json());

// Koneksi DB lalu start server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅MongoDB connected");
    app.listen(process.env.PORT || 5050, () =>
      console.log(`‼️ API ready at http://localhost:${process.env.PORT || 5050}`)
    );
  })
  .catch(err => { console.error("MongoDB error:", err); process.exit(1); });

// Schema + Model
const projectSchema = new mongoose.Schema({
  namaprojek: { type: String, required: true },
  deskripsi: String,
  type: String,
  status: String,
  link: String,
  startingAt: Date
});
const Project = mongoose.model("Project", projectSchema);

app.get("/", (req, res) => res.send("API Successfuly Connected"));

// REST endpoints
app.get("/projects", async (req, res, next) => {
  try { res.json(await Project.find().sort({ startingAt: -1 })); }
  catch (e) { next(e); }
});

app.get("/projects/:id", async (req, res, next) => {
  try {
    const p = await Project.findById(req.params.id);
    if (!p) return res.status(404).json({ message: "Not found" });
    res.json(p);
  } catch (e) { next(e); }
});

app.get("/projects", async (req, res, next) => {
  try {
    const {status,type} = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (type) filter.type = type;

    const data = await Project.find(filter).sort({ startingAt: -1 });
    res.json(data);
  } catch (e) { next(e); }
});

app.post("/projects", async (req, res, next) => {
  try { const p = await Project.create(req.body); res.status(201).json(p); }
  catch (e) { next(e); }
});

app.put("/projects/:id", async (req, res, next) => {
  try {
    const p = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true, runValidators: true
    });
    if (!p) return res.status(404).json({ message: "Not found" });
    res.json(p);
  } catch (e) { next(e); }
});

app.delete("/projects/:id", async (req, res, next) => {
  try { await Project.findByIdAndDelete(req.params.id); res.status(204).end(); }
  catch (e) { next(e); }
});

// Error handler minimal
app.use((err, req, res, next) => {
  console.error(err); res.status(500).json({ message: "Server error" });
});
