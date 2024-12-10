const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());

app.use(
  '/',
  createProxyMiddleware({
    target: 'https://api.hcgateway.shuchir.dev', // Ziel-URL
    changeOrigin: true,
    onProxyReq: (proxyReq) => {
      proxyReq.setHeader('Origin', '');
    },
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`CORS-Proxy läuft auf Port ${PORT}`);
});
