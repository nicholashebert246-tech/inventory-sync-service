import { Request, Response } from 'express';
import { DatabaseService } from '../services/dbService';
import { WebhookPayload } from '../types';

const dbService = new DatabaseService();

export class SyncController {
  async processWebhook(req: Request, res: Response): Promise<void> {
    try {
      const payload: WebhookPayload = req.body;
      await dbService.deductInventory(payload);
      res.status(200).json({ status: 'success' });
    } catch (error) {
      res.status(500).json({ status: 'error' });
    }
  }
}
