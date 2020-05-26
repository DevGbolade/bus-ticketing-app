export default (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    name: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {});
  // associations can be defined here
  Ticket.associate = (models) => models;
  return Ticket;
};
