import express from 'express'

const app = express();

app.use(express.json());
const PORT = 3000;


app.get("*any", (req, res) => {
  res.send("Sorry to say Ignuro San this page doesn't exist")
})


app.listen(PORT, () => {
  console.log(`Server is live at https://localhost:${PORT}`)
})