const express = require('express');
const helmet = require('helmet');
const next = require('next');
const robots = require('express-robots-txt');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(helmet.hsts({
    maxAge: 5184000, // 60 days
  }));

  server.use(helmet.frameguard({ action: 'deny' }));

  server.use(robots({ UserAgent: '*', Disallow: '/' }));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
