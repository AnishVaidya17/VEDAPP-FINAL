import 'express-async-errors';
import express from 'express';
const app = express();
app.use(express.json());

import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();

import cookieParser from 'cookie-parser';
app.use(cookieParser());

//routers
import authRouter from './routes/authRoutes.js';
import casepaperRouter from './routes/casepaperRoutes.js'
import userRouter from './routes/userRouter.js';
import followupPaperRouter from './routes/followuppaperRoutes.js'

//public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

//middleware
import { authenticateUser } from './middleware/authMiddleware.js';
import errorHandlerMiddleware from './middleware/error-handler.js';


const __dirname = dirname(fileURLToPath(import.meta.url));


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './public')));

//basic-route
app.get('/', (req, res) => {
  res.send('Hello World');
});

//testname-route
app.post('/api/v1/testname', (req, res) => {
  const { name } = req.body;
  res.json({ msg: `hello ${name}` });
});

//test-route
app.get('/api/v1/test', (req, res) => {
  res.json({ msg: "test route" });
});


//---------------MAIN-ROUTES--------------

//auth-router
app.use('/api/v1/auth', authRouter);

//casepaper-router
app.use('/api/v1/casepapers', authenticateUser, casepaperRouter)

//user-router
app.use('/api/v1/users', authenticateUser, userRouter);

//followupPaper-router
app.use('/api/v1/followuppapers', authenticateUser, followupPaperRouter)

//deploy
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'))
})

//not-found
app.use('*', (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' });
});


//ERROR Handler
app.use(errorHandlerMiddleware);



//----------------DATABASE----------------
import connectDB from './db/connectDB.js';
import { StatusCodes } from 'http-status-codes';

const port = process.env.PORT || 5100;
//db connection
try {
  await connectDB(process.env.MONGO_URL)
  app.listen(port, () => {
    console.log(`SERVER RUNNING/LISTENING ON PORT ${port}`);
  })
} catch (error) {
  console.log(error);
  process.exit(1)
}


