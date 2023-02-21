module.exports = (mongoose) => {

  const uniqueValidator = require('mongoose-unique-validator');

  const flowerSchema = mongoose.Schema({
      flowerName: {
        type: String, unique: true, required: [true, "can't be blank"], index: true
      },
      botanicalFamily: {
        type: String, required: [true, "can't be blank"]
      },
      botanicalGenus: {
        type: String, required: [true, "can't be blank"]
      },
      availability: {
        type: String
      },
      vaseLife: {
        type: String
      }, 
      description: {
        type: String
      },
      stemLength: {
        type: String
      },
      colorRange: {
        type: String
      },
      homeCare: {
        type: String
      },
      florist: {
        conditioning: {
          type: String
        },
        storage: {
          type: String
        },
        display: {
          type: String
        },
        stemType: {
          type: String
        }
      }
    },
    {collection: 'flowers'},
    {timestamps: true}
  );
  flowerSchema.plugin(uniqueValidator, {message: 'is already taken.'});

  return mongoose.model('flowers', flowerSchema);
};

