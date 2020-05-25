export default (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    stops: DataTypes.STRING
  }, {});
  // associations can be defined here
  Route.associate = (models) => models;
  return Route;
};
