const db = require('../models');
const Flower = db.flowers;

module.exports.getAll  = async (req, res) => {
  try {
    Flower.find({})
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving flowers.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getFlower = (req, res) => {
  try {
    const flowerName = req.params.flowerName;
    Flower.find({ flowerName: flowerName })
      .then((data) => {
        if (!data) res.status(404).send({ message: 'Not found flower with name: ' + flowerName });
        else res.status(200).send(data[0]);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Error retrieving flower with flowerName=' + flowerName,
          error: err
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.createFlower = (req, res) => {
  try {
    if (!req.body.flowerName || !req.body.botanicalFamily || !req.body.botanicalGenus) {
      res.status(400).send({ message: 'Content can not be empty!' });
      return;
    }
    const flowers = new Flower(req.body);
    flowers
      .save()
      .then((data) => {
        console.log(data);
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the flower.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.updateFlower = async (req, res) => {
  try {
    const flowerName = req.params.flowerName;
    if (!flowerName) {
      res.status(400).send({ message: 'Invalid flower name Supplied' });
      return;
    }
    Flower.findOne({ flowerName: flowerName }, function (err, flowers) {
      flowers.flowername = req.params.flowername;
      flowers.botanicalFamily = req.body.botanicalFamily;
      flowers.botanicalGenus = req.body.botanicalGenus;
      flowers.availability = req.body.availability;
      flowers.vaseLife = req.body.vaseLife;
      flowers.description = req.body.description;
      flowers.stemLength = req.body.stemLength;
      flowers.colorRange = req.body.colorRange;
      flowers.homeCare = req.body.homeCare;
      flowers.florist = req.body.florist;
      
      flowers.save(function (err) {
        if (err) {
          res.status(500).json(err || 'Some error occurred while updating the flower.');
        } else {
          res.status(204).send();
        }
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deleteFlower = async (req, res) => {
  try {
    const flowerName = req.params.flowerName;
    if (!flowerName) {
      res.status(400).send({ message: 'Invalid flower name supplied' });
      return;
    }
    Flower.deleteOne({ flowerName: flowerName }, function (err, result) {
      if (err) {
        res.status(500).json(err || 'Some error occurred while deleting the contact.');
      } else {
        res.status(204).send(result);
      }
    });
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the contact.');
  }
};