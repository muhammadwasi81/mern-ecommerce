import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // => when the user registers it will not an admin
    },
  },
  {
    timeStamps: true, // => if all conditions are true then timeStamps will run
  }
);

const User = mongoose.model('User', userSchema);

export default User;
