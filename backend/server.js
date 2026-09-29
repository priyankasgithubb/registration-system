const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const visitorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    personToMeet: {
      type: String,
      required: true,
    },

    purpose: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Checked In",
    },
  },
  {
    timestamps: true,
  }
);

const Visitor = mongoose.model("Visitor", visitorSchema);

app.get("/api/visitors", async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({
      createdAt: -1,
    });

    res.json(visitors);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.get("/api/visitors/:id", async (req, res) => {
  try {
    const visitor = await Visitor.findById(req.params.id);

    if (!visitor) {
      return res.status(404).json({
        message: "Visitor not found",
      });
    }

    res.json(visitor);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.post("/api/visitors", async (req, res) => {
  try {
    const newVisitor = new Visitor(req.body);

    const savedVisitor = await newVisitor.save();

    res.json(savedVisitor);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

app.put("/api/visitors/:id", async (req, res) => {
  try {
    const updatedVisitor = await Visitor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedVisitor) {
      return res.status(404).json({
        message: "Visitor not found",
      });
    }

    res.json(updatedVisitor);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.delete("/api/visitors/:id", async (req, res) => {
  try {
    const deletedVisitor = await Visitor.findByIdAndDelete(
      req.params.id
    );

    if (!deletedVisitor) {
      return res.status(404).json({
        message: "Visitor not found",
      });
    }

    res.json({
      message: "Visitor deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });