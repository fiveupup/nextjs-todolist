import mongoose from "mongoose";
import { title } from "process";

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
},{
    timestamps:true
});

const TodoModel = mongoose.models.todo || mongoose.model('todo', Schema);

export default TodoModel;