import { Router } from 'express';
import BusController from '../controllers/bus.controller';

const router = Router();

router.post('/bus', BusController.CreatOneBus);


export default router;
