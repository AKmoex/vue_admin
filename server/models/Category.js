const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var categorySchema = new Schema({
  name: {
    type: String,
  },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
});
categorySchema.virtual("children", {
  localField: "_id",
  foreignField: "parent",
  justOne: false,
  ref: "Category",
});
module.exports = mongoose.model("Category", categorySchema);
