import database from '../models';
/**
 * @class TicketController
 * @description Controllers for Tickets
 * @exports TicketController
 */
export default class TripController {
  /**
   * @method CreateTrip
   * @description Method for booking a Ticket
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */
  static async createTicket(req, res) {
    try {
      const trip = await database.Ticket.create(req.body);
      const response = trip.toJSON();
      return res.status(201).json({
        status: 'success',
        data: { ...response }
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static async getAllTickets(req, res) {
    try {
      const trips = await database.Ticket.findAll();
      return res.status(201).json({
        status: 'success',
        data: trips
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  }
}
