import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// CONNECT TO MONGODB
mongoose.connect('mongodb://HEREGOETHTHEMONGOSTUFF')
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