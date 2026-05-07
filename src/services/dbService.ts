import { Pool } from 'pg';
import { WebhookPayload } from '../types';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://localhost:5432/warehouse'
});

export class DatabaseService {
  async deductInventory(payload: WebhookPayload): Promise<void> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      
      for (const item of payload.items) {
        await client.query(
          'UPDATE inventory SET current_stock = current_stock - $1 WHERE product_id = $2',
          [item.quantity, item.product_id]
        );
      }
      
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }
}
