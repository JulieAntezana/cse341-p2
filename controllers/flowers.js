const db = require('../models');
const Flower = db.flowers;

exports.getFlower = (req, res) => {
  const flowerName = req.params.flowerName;
  Flower.find({ flowerName: flowerName })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found flower with name: ' + flowerName });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving flower with flowerName=' + flowerName,
        error: err
      });
    });
};

// const apiKey =
//   'Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N';

// exports.create = (req, res) => {
//   /*
//     #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
//   */
//   // Validate request
//   if (!req.body.name) {
//     res.status(400).send({ message: 'Content can not be empty!' });
//     return;
//   }

  

//   // Create a Flower
//   const flower = new Flower({
//     flower_id: req.body.flower,
//     name: req.body.name,
//     commonName: req.body.commonName,
//     botanicalName: req.body.botanicalName,
//     botanicalFamily: req.body.botanicalFamily,
//     botanicalGenus: req.body.botanicalGenus,
//     availability: array [
//       where: req.body.where,
//       when: req.body.when
//     ],
//     vaseLife: req.body.vaseLife,
//     description: array [
//       notes: req.body.notes,
//       stemLength: req.body.stemLength
//     ],
//     colorRange: req.body.colorRange,
//     florist: array [
//       conditioning: req.body.conditioning,
//       storage: req.body.storage,
//       display: req.body.display,
//       stemType: req.body.stemType
//     ],
//     homeCare:req.body.homeCare
//   });
//   // Save Flower in the database
//   flower
//     .save(flower)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || 'Some error occurred while creating the Flower.',
//       });
//     });
// };

// exports.findAll = (req, res) => {
//   /*
//     #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68XwZj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
//   */
//   console.log(req.header('apiKey'));
//   if (req.header('apiKey') === apiKey) {
//     Flower.find(
//       {},
//       {
//         flower_id: 1,
//         name: 1,
//         location: 1,
//         dedicated: 1,
//         additionalInfo: 1,
//         _id: 0,
//       }
//     )
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message:
//             err.message || 'Some error occurred while retrieving flowers.',
//         });
//       });
//   } else {
//     res.send('Invalid apiKey, please read the documentation.');
//   }
// };

// // Find a single Flower with an id
// exports.findOne = (req, res) => {

//   const flower_id = req.params.flower_id;
//   if (req.header('apiKey') === apiKey) {
//     Flower.find({ flower_id: flower_id })
//       .then((data) => {
//         if (!data)
//           res
//             .status(404)
//             .send({ message: 'Not found Flower with id ' + flower_id });
//         else res.send(data[0]);
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message: 'Error retrieving Flower with flower_id=' + flower_id,
//         });
//       });
//   } else {
//     res.send('Invalid apiKey, please read the documentation.');
//   }
// };

