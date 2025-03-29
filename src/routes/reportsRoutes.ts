import { Router } from 'express';
import * as reportController from '../controllers/reportsController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();
router.use(authenticate);

router.post('/', reportController.createReport);
router.get('/', reportController.getAllReports);
router.get('/:id', reportController.getReportById);
router.get('/project/:projectId', reportController.getReportByProjectId);
router.get('/special/:word', reportController.getReportsWithRepeatedWord);
router.put('/:id', reportController.updateReport);
router.delete('/:id', reportController.deleteReport);

export default router;
