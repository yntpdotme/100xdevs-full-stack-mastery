require('express-async-errors');
const express = require('express');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
const app = express();

// Middleware for parsing request bodies
app.use(express.json());
app.use('/admin', adminRouter);
app.use('/user', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
