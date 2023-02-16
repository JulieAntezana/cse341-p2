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






// module.exports = (mongoose) => {
//   const flowerSchema = mongoose.Schema({
//     "flowerName": {
//       "type": "string",
//       "example": "Rose"
//     },
//     "botanicalName": {
//       "type": "string"
//     },
//     "botanicalFamily": {
//       "type": "string"
//     },
//     "botanicalGenus": {
//       "type": "string"
//     },
    // "availability": {
    //   "type": "string"
    // },
    // "vaseLife": {
    //   "type": "string"
    // },
    // "description": {
    //   "type": "array",
    //   "items": {
    //     "type": "object",
    //     "properties": {
    //       "notes": {
    //         "type": "string"
    //       },
    //       "stemLength": {
    //         "type": "string"
    //       }
    //     }
    //   }
    // },
    // "colorRange": {
    //   "type": "string"
    // },
    // "florist": {
    //   "type": "array",
    //   "items": {
    //     "type": "object",
    //     "properties": {
    //       "conditioning": {
    //         "type": "string"
    //       },
    //       "storage": {
    //         "type": "string"
    //       },
    //       "display": {
    //         "type": "string"
    //       },
    //       "stemType": {
    //         "type": "string"
    //       }
    //     }
    //   }
    // },
    // "homeCare": {
    //   "type": "string"
    // }
//   },
//   {collection: 'flowers'},
//   );

//   return mongoose.model('flowers', flowerSchema);
// };
