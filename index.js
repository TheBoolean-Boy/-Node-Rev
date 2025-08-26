import express from 'express'

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to ExpressJS")
})



app.listen(PORT, async () => {
  // await connectDB();
  console.log(`Server is live at https://localhost:${PORT}`)
})


// 