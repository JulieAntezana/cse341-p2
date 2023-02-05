module.exports = (mongoose) => {
  const Recipe = mongoose.model(
    'recipes',
    mongoose.Schema(
      {
        recipe_id: Number,
        name: String,
        location: String,
        dedicated: String,
        additionalInfo: Boolean,
      },
      { timestamps: true }
    )
  );

  return Recipe;
};