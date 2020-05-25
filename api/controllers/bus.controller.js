import database from '../models';
/**
 * @class BusController
 * @description Controllers for Buses
 * @exports BusController
 */
export default class BusController {
  /**
   * @method CreateOneBus
   * @description Method for creating a Bus
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */
  static async CreatOneBus(req, res) {
    try {
      const bus = await database.Bus.create(req.body);
      const response = bus.toJSON();
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
