import database from '../models';
/**
 * @class TripController
 * @description Controllers for Trips
 * @exports TripsController
 */
export default class TripController {
  /**
   * @method CreateTrip
   * @description Method for booking a Trip
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */
  static async bookOneTrip(req, res) {
    try {
      const trip = await database.Trip.create(req.body);
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
}
