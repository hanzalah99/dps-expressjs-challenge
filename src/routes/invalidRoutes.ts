import { Router } from 'express';
import invalidController from '../controllers/invalidController';
const router = Router();

//Invalid Routes for error handling

router.all('*', invalidController.handleInvalidRoute);

export default router;
