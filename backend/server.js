require("dotenv").config();
const express = require("express");
const app = express();
const todosRoutes = require("./routes/todos");
const mongoose = require("mongoose");
const cors = require("cors");


app.use(cors())
app.use(express.json());

// logger
app.use((req, res, next) => {
  console.log(req.path, req.method);

  next();
});

app.use("/api/todos", todosRoutes);

app.get("/", (req, res) => {
  console.log("here");
  res.status(200).json({ message: "Welocome to the App" });
});



mongoose.connect(process.env.MONGOURI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`db connected & listing to port ${process.env.PORT}`);
      });    
}).catch(error => {
    console.log(error)
})


