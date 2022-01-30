const birds = require('../birds.json');

function getBirds() {
  return birds;
}

function updateBird(id, body) {
  const bird = birds.find((el) => el.id === Number(id));
  bird.count = body.count;
  bird.observer.push(body.name);
  return bird;
}

module.exports = { getBirds, updateBird };
