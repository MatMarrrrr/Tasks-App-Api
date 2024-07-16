const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: null },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
