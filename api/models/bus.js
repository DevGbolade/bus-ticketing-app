export default (sequelize, DataTypes) => {
  const Bus = sequelize.define('Bus', {
    number: DataTypes.NUMBER
  }, {});
  // associations can be defined here
  Bus.associate = (models) => models;
  return Bus;
};
