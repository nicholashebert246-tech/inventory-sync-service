import { Router } from 'express';
import { SyncController } from '../controllers/syncController';

const router = Router();
const syncController = new SyncController();

router.post('/inventory', (req, res) => syncController.processWebhook(req, res));

export default router;
