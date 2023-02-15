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
  },
  {collection: 'user'},
  );

  return mongoose.model('user', userSchema);
};
