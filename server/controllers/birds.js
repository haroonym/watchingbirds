const asyncHandler = require('express-async-handler');

const birds = require('../model/birds.js');

const getBirds = asyncHandler(async (req, res) => {
  const result = await birds.getBirds();
  res.status(200).json(result);
});

module.exports = { getBirds };
