import { Router } from 'express';
import TripController from '../controllers/trip.controller';

const router = Router();

router.post('/trip', TripController.bookOneTrip);


export default router;
