module.exports = (mongoose) => {
  
  const uniqueValidator = require('mongoose-unique-validator');
  
  const userSchema = mongoose.Schema({
    username: {
      type: String, unique: true, required: [true, "can't be blank"], index: true
    },
    password: {
      type: String, required: [true, "can't be blank"]
    },
    displayName: {
      type: String, required: [true, "can't be blank"]
    },
    email: {
      type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true
    }
  },
  {collection: 'user'},
  {timestamps: true}
  );
  userSchema.plugin(uniqueValidator, {message: 'is already taken.'});
  return mongoose.model('user', userSchema);
};
