import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser' ;
import eegRouter from './eegRouter.js';

const app = express();
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ashar1:ashar1@cluster0.ybb8j.mongodb.net/NextAmazona?retryWrites=true&w=majority');
console.log('new connection');

app.use('/api', eegRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`serving at port`, port ));
 
