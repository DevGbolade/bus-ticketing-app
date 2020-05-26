export default (sequelize, DataTypes) => {
  const Bus = sequelize.define('Bus', {
    plateNumber: DataTypes.INTEGER
  }, {});
  // associations can be defined here
  Bus.associate = (models) => models;
  return Bus;
};
