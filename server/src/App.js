require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser');
const purchaseRouter = require('./router/purchaseRouter');
const authRouter = require('./router/authRouter');
const tokensRouter = require('./routes/tokensRouter');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const cors = require('cors');

const { PORT } = process.env;


// const corsConfig = {
//   origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://news.ru/rss/category/post/economics/'],
//   credentials: true,
// };
// app.use(cors(corsConfig));

app.use(cookieParser());
app.use('/api/purchases', purchaseRouter);
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokensRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});