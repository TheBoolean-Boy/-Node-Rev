import express from 'express'

const app = express();

app.use(express.json());
const PORT = 3000;

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  const username = "Saswat Rath"
  res.render('pela', {username});
})

app.listen(PORT, () => {
  console.log(`Server is live at https://localhost:${PORT}`)
})