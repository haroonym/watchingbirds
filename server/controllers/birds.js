const asyncHandler = require('express-async-handler');

const birds = require('../model/birds.js');

const getBirds = asyncHandler(async (req, res) => {
  const result = await birds.getBirds();
  res.status(200).json(result);
});

const updateBird = async (req, res) => {
  const result = await birds.updateBird(req.params.id, req.body);
  res.status(200).send(result);
};

module.exports = { getBirds, updateBird };
