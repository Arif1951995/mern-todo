const Todo = require("../models/Todo");
const mongoose = require("mongoose");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
const getTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "No Such Todo" });
    }
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(404).json({ message: "No Such Todo" });
  }
};
const createTodo = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Title is required" });
  }
  try {
    const todo = await Todo.create(req.body);
    return res.status(201).json(todo);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
const updateTodo = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No Such Todo" });
  }

  if (!req.body.title && !req.body.desc) {
    return res.status(400).json({ message: "field are required" });
  }
  try {
    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    if (!todo) {
      return res.status(404).json({ message: "No Such Todo" });
    }
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
const deleteTodo = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No Such Todo" });
  }

  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ message: "No Such Todo" });
    }
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { getTodos, getTodo, createTodo, deleteTodo, updateTodo };
