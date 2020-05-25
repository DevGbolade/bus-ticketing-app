export default (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    dateTime: DataTypes.STRING,
    busId: DataTypes.STRING,
    routeId: DataTypes.STRING
  }, {});
  // associations can be defined here
  Trip.associate = (models) => models;
  return Trip;
};
