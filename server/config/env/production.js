var mongodb = ENV["herokuMongo"];
module.exports = {
  db: mongodb,
  sessionSecret: 'productionSecret'
};
