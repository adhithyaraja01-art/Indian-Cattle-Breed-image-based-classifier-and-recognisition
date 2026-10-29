import express, { Request, Response } from 'express';
import { classifyIndianBreed } from './classifier';

export const apiRouter = express.Router();

apiRouter.use(express.json({ limit: '25mb' }));

apiRouter.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'Indian Breed Classification API',
    hasGeminiKey: !!process.env.GEMINI_API_KEY,
    timestamp: new Date().toISOString()
  });
});

apiRouter.post('/classify', async (req: Request, res: Response) => {
  try {
    const { imageBase64, mimeType, hint } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Missing imageBase64 in request body' });
    }

    const result = await classifyIndianBreed(imageBase64, mimeType || 'image/jpeg', hint);
    return res.json({ success: true, result });
  } catch (error: any) {
    console.info('[Classifier API] Endpoint routing notice:', error?.message?.slice(0, 80) || 'API unavailable');
    return res.json({
      success: false,
      error: 'Gemini Cloud Vision API unavailable',
      details: error?.message || 'Gemini Cloud Vision requires billing tier on this project.'
    });
  }
});
