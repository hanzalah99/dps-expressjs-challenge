import { Router } from 'express';
import * as projectController from '../controllers/projectsController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();
router.use(authenticate);

//Projects Routes

router.post('/', projectController.createProject);
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

export default router;
