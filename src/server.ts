import express from 'express';
import webhookRoutes from './routes/webhooks';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/webhooks', webhookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
