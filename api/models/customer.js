export default (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Customer.associate = () => {
    // Customer.hasMany(models.Comments, { as: 'requestComments', foreignKey: 'requestId' });
    // Customer.hasMany(models.Trips, { as: 'requestTrips', foreignKey: 'requestId' });
  };
  return Customer;
};
