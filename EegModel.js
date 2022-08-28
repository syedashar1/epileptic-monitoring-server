import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    time: { type: String, required: true },
    date: { type: String, required: true },
    frequency: { type: String, required: true },
    status: { type: String, default: 'No Seizure' },
  },
  {
    timestamps: true,
  }
);

const Eeg =  mongoose.models.Eeg || mongoose.model('Eeg', userSchema);
export default Eeg;