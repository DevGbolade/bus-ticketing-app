'use strict';
module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    stops: DataTypes.STRING
  }, {});
  Route.associate = function(models) {
    // associations can be defined here
  };
  return Route;
};