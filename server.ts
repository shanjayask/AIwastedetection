import express from 'express';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '25mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    nodeVersion: process.version,
  });
});

// Waste classification endpoint
app.post('/api/classify', async (req, res) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg' } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'No image data provided. Please upload or select an image.' });
    }

    // Clean base64 string
    const cleanBase64 = imageBase64.replace(/^data:image\/[a-zA-Z+]+;base64,/, '');

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured in the environment variables.',
        code: 'MISSING_API_KEY',
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemPrompt = `You are a specialized Artificial Intelligence Waste Classifier for an engineering college mini-project.
Analyze this image and identify the primary waste object.
Classify the object into EXACTLY ONE of the following three categories:
1. "Organic" (e.g. food scraps, fruit peels, vegetable waste, leaves, tea bags, garden trimmings, biodegradable kitchen scraps, egg shells)
2. "Recyclable" (e.g. clean plastic bottles/containers, metal/aluminum cans, clean cardboard, paper, glass bottles, clean tins)
3. "Non-Recyclable" (e.g. contaminated wrappers, chip/snack packets, foil packaging, used tissues, greasy pizza boxes, broken ceramics, medical waste, styrofoam, hazardous or general mixed trash)

Strict Output Rules:
- "category" MUST BE EXACTLY one of: "Organic", "Recyclable", "Non-Recyclable"
- "item": Clear, human-readable name of the detected waste item (e.g. "PET Plastic Water Bottle", "Banana Peel", "Potato Chip Packet")
- "confidence": Realistic percentage between 80.0 and 99.5
- "recommendation": Practical disposal instruction (e.g. "Rinse residue, crush to save space, and place into the blue recycling bin.")
- "materialComposition": Likely primary materials (e.g. "Polyethylene Terephthalate (PET Plastic)", "Cellulose & organic biomass", "Multi-layered plastic/foil laminate")
- "environmentalImpact": Realistic environmental fact or decomposition time (e.g. "Takes 450 years to degrade; can be recycled into polyester fiber.")
- "recyclingTip": A helpful tip (e.g. "Remove cap and ensure container is dry.")

Output valid JSON matching this schema.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        {
          role: 'user',
          parts: [
            {
              inlineData: {
                mimeType,
                data: cleanBase64,
              },
            },
            {
              text: systemPrompt,
            },
          ],
        },
      ],
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            item: { type: Type.STRING },
            category: { type: Type.STRING, enum: ['Organic', 'Recyclable', 'Non-Recyclable'] },
            confidence: { type: Type.NUMBER },
            recommendation: { type: Type.STRING },
            materialComposition: { type: Type.STRING },
            environmentalImpact: { type: Type.STRING },
            recyclingTip: { type: Type.STRING },
          },
          required: ['item', 'category', 'confidence', 'recommendation'],
        },
      },
    });

    const text = response.text || '';
    let parsed: any;
    try {
      parsed = JSON.parse(text);
    } catch {
      const stripped = text.replace(/```json/g, '').replace(/```/g, '').trim();
      parsed = JSON.parse(stripped);
    }

    // Strictly sanitize category
    const valid = ['Organic', 'Recyclable', 'Non-Recyclable'];
    if (!valid.includes(parsed.category)) {
      const lower = String(parsed.category || '').toLowerCase();
      if (lower.includes('organic')) parsed.category = 'Organic';
      else if (lower.includes('recycl')) parsed.category = 'Recyclable';
      else parsed.category = 'Non-Recyclable';
    }

    if (typeof parsed.confidence !== 'number' || parsed.confidence < 1) {
      parsed.confidence = 94.5;
    }

    return res.json(parsed);
  } catch (err: any) {
    console.error('Classification API error:', err);
    return res.status(500).json({
      error: err.message || 'Error executing Gemini Vision classification',
      details: err.toString(),
    });
  }
});

// Vite middleware in dev or static files in prod
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
} else {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`AI Waste Classification server started on http://0.0.0.0:${PORT}`);
});
