import express from 'express';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import mongoose from 'mongoose';

const app =express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
