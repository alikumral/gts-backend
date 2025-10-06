require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { connectDB } = require('./config/db');
const routes = require('./routes');

const app = express();
app.use(helmet());
app.use(cors({ origin: (process.env.CORS_ORIGIN || 'http://localhost:5173').split(','), credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.use('/api', routes);

app.use((err, _req, res, _next) => { console.error(err); res.status(500).json({ error: 'Server error' }); });

const PORT = process.env.PORT || 4000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
}).catch((err) => { console.error('DB connection failed', err); process.exit(1); });
