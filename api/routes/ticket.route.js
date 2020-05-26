import { Router } from 'express';
import TicketController from '../controllers/ticket.controller';

const router = Router();

router
  .get('/ticket', TicketController.getAllTickets)
  .post('/ticket', TicketController.createTicket);


export default router;
