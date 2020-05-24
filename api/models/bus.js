'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bus = sequelize.define('Bus', {
    number: DataTypes.NUMBER
  }, {});
  Bus.associate = function(models) {
    // associations can be defined here
  };
  return Bus;
};