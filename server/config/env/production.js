var mongodb = process.env.herokuMongo;
module.exports = {
  db: mongodb,
  sessionSecret: 'productionSecret'
};
