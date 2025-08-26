import express from 'express'
import { connectDB } from './cofig/db.js';
import { Person } from './models/person.model.js';


const app = express();


app.use(express.json());
const PORT = 3000;

app.post("/person", async(req,res) => {

  const {email, name, age} = req.body;
  const newPerson = new Person({
    name,
    age,
    email
  })
  await newPerson.save();

  console.log(newPerson)
  res.send("Person Added")
})

app.put("/person", async(req, res) => {
  const {id} = req.body;
  const personData = await Person.findById(id)
  personData.age = 89;
  await personData.save()
  console.log(personData)
  res.send("User Info Updated")
})

app.delete("/person/:id", async (req, res) => {
  const {id} = req.params;
  await Person.findByIdAndDelete(id)
  res.send("Person details removed from db")
})



app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is live at https://localhost:${PORT}`)
})


// 