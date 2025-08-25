import express from 'express'

const app = express();

app.use(express.json());
const PORT = 3000;

//Our Middleware
app.use("/welcome", (req, res, next) => {
  console.log('Start'+new Date().toLocaleString());
  res.on('finish', () => {
    console.log("Finished" +new Date().toLocaleString());
  })
  next();
})

app.get("/welcome", (req, res) => {
  console.log("Processing"+new Date().toLocaleString());
  res.send("This is the Welcome Route");
})

app.get("/error", () => {
  throw new Error("This is a test Error")
})

app.use((err, req, res, next) => {
  console.log(err.message)
  res.send("Error Handling Middleware Testing")
})

app.get("/", (req, res) => {
  console.log("Parent Route"+new Date().toLocaleString());
  res.send("Welcome to ExpressJS");
})

app.listen(PORT, () => {
  console.log(`Server is live at https://localhost:${PORT}`)
})