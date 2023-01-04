// npm i -D ts-node, npm i -D typescript @types/node @types/express , tsc --init, npm i -D nodemon
import express from 'express'
import remindersRouter from './routers/reminders'

const app = express();
app.use(express.json());
app.use('/reminders', remindersRouter);


app.listen(8000, () => console.log('Server has started'));
