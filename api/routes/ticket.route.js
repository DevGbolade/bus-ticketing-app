import { Router } from 'express';
import TicketController from '../controllers/ticket.controller';

const router = Router();

router.post('/ticket', TicketController.createTicket);


export default router;
