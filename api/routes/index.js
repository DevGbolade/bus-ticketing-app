import { Router } from 'express';
import tripRoute from './trip.route';
import busRoute from './bus.route';


const router = new Router();

router.use('/', tripRoute);
router.use('/', busRoute);

export default router;
