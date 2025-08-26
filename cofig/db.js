import express from "express"
import mongoose from "mongoose"


const MONGODB_URI = 'mongodb+srv://saswatrath02:NsY46c4AAWKF9wJL@cluster0.dndmfff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
export const connectDB = async() => {
  await mongoose.connect(MONGODB_URI).then( () => {
  console.log("DataBase Connected")
})}

