module.exports = (mongoose) => {
  const Recipe = mongoose.model(
    'recipes',
    mongoose.Schema({
      recipe_id: {
        type: Number
      },
      recipeName:{
          type: Number
        },
      recipeSize:{
            type: Number
          },
      recipeCategory:{
            type: Number
          },
      recipeContainer:{
            type: Number
          },
      recipeIngredients: {
        foliage: {
          foliage1: {
            type: String
          },
          foliage2: {
            type: String
          },
          foliage3: {
            type: String
          }
        },
        focusFlowers: {
          focusFlower1: {
            type: String
          },
          focusFlower2: {
            type: String
          },
          focusFlower3: {
            type: String
          },
          focusFlower4: {
            type: String
          },
          focusFlower5: {
            type: String
          }
        },
        fillerFlowers: {
          fillerFlower1: {
            type: String
          },
          fillerFlower2: {
            type: String
          },
          fillerFlower3: {
            type: String
          },
          fillerFlower4: {
            type: String
          },
          fillerFlower5: {
            type: String
          }
        },
        accessories: {
          accessory1: {
            type: String
          },
          accessory2: {
            type: String
          },
          accessory3: {
            type: String
          },
          accessory4: {
            type: String
          },
          accessory5: {
            type: String
          }
        }
      },
      recipeInstructions: {
        prep: {
          prepContainer: {
            type: String
          },
          prepFoliage: {
            type: String
          },
          prepFlowers: {
            type: String
          },
          prepAccessories: {
            type: String
          },
          prepOther: {
            type: String
          }
        },
        arrange: {
          arrFoliage: {
            type: String
          },
          arrFocus: {
            type: String
          },
          arrFiller: {
            type: String
          },
          arrAccessories: {
            type: String
          }
        }
      },
      recipeNotes:{
        type: String
      }
    })
  );

  return Recipe;
};