// index.mjs
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/news', async (req, res) => {
  const { country = 'us', category = 'business', page = 1, pageSize = 12 } = req.query;
  const apiKey = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status !== 'ok') {
      return res.status(500).json({ error: 'NewsAPI error', details: data });
    }
    res.json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
