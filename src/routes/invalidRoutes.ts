import { Router } from 'express';
import invalidController from '../controllers/invalidController';
const router = Router();

router.all('*', invalidController.handleInvalidRoute);

export default router;
