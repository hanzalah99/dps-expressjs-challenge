import { Router } from 'express';
import * as reportController from '../controllers/reportsController';

const router = Router();

router.post('/', reportController.createReport);
router.get('/', reportController.getAllReports);
router.get('/:id', reportController.getReportById);
router.get('/project/:projectId', reportController.getReportByProjectId);
router.put('/:id', reportController.updateReport);
router.delete('/:id', reportController.deleteReport);

export default router;
