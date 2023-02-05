module.exports = (mongoose) => {
  const Flower = mongoose.model(
    'flowers',
    mongoose.Schema(
      {
        flower_id: Number,
        name: String,
        location: String,
        dedicated: String,
        additionalInfo: Boolean,
      },
      { timestamps: true }
    )
  );

  return Flower;
};