import express from 'express'
import router from './router.js';

const app = express();


const PORT = 3000;

// Define a route
app.get( "/", (req, res) =>{
  res.send("Welcome to EXpress Js");
})

app.get( "/products", (req, res) => {
  res.send("This is the Products page");
})


app.use("/user", router)




app.listen(PORT, () => {
  console.log(`Server is live at https://localhost:${PORT}`)
})