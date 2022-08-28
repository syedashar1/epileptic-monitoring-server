import express from 'express';
import Eeg from './EegModel.js';

const eegRouter = express.Router();

eegRouter.post("/post-eeg", async (req, res) => {
  console.log('posting new data')
  const newUser = new Eeg(req.body);
  await newUser.save();
  res.send('Data Entered Successfully');
}); 

eegRouter.get("/get-eeg", async (req, res) => {
    const eegData = await Eeg.find({} , 'time date frequency status');
    res.send([ 'EEG Readings History : Syed Muhammad Ashar Saghir' , [...eegData].reverse()]);
}); 




export default eegRouter;
