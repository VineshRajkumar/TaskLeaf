import mongoose from "mongoose";
const { Schema, model } = mongoose;
const TodoSchema = new Schema({
  todo: { type: String, required: true },
  isCompleted: { type: Boolean, required: true },
});

export default mongoose.models.Todoslist || model("Todoslist", TodoSchema);
