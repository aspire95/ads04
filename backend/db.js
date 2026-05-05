const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');

if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    process.env[key] = process.env[key] || value;
  }
}

const pool = new Pool({
  user: process.env.DB_USER || '23510014',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'DB23510014',
  password: process.env.DB_PASSWORD || 'mayur',
  port: Number(process.env.DB_PORT || 5432),
});

module.exports = pool;
