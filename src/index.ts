import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
const PORT = process.env.PORT || 3000;
const mongoPass = 'DCwjAHkWHpYr4dfN';
app.use(express.json());

// DB CONNECTION ADDRESS
const uri = `mongodb+srv://mattrcsimpson:${mongoPass}@cluster0.jczyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// CONNECT TO MONGODB
mongoose.connect(uri)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
});

// TEST ROUTE 
app.get('/', (req: Request, res: Response) => {
  res.send('If you see this, the test route is functional');
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});