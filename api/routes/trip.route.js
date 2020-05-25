import { Router } from 'express';
import TripController from '../controllers/trip.controller';

const router = Router();

router.get('/trip', TripController.bookOneTrip);


export default router;
