const express = require("express");
const { getTodos, getTodo, createTodo, updateTodo, deleteTodo } = require("../controllers/todoController");

const router = express.Router();

// get all todos
router.get("/", getTodos)



// get a single todo
router.get("/:id", getTodo)


// Create todo
router.post("/", createTodo)

router.patch("/:id", updateTodo)

// delete todo
router.delete("/:id", deleteTodo)




module.exports = router;

