module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    username: {
      type: String
    },
    password: {
      type: String
    },
    displayName: {
      type: String
    },
    email: {
      type: String
    }
  });

  return mongoose.model('users', userSchema);
};