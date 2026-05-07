export interface WebhookPayload {
  webhook_id: string;
  event_type: string;
  order_id: string;
  items: Array<{
    product_id: string;
    quantity: number;
  }>;
  timestamp: string;
}

export interface InventoryRecord {
  product_id: string;
  current_stock: number;
  reserved_stock: number;
}
