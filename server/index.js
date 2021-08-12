const express = require('express');
const axios = require('axios');
const https = require('https');
const logger = require('morgan');
const env = require('dotenv');
const cors = require('cors');
const routes = require('./layers/routes/index.js');
const config = require('./app-services-configs.js');
require('express-async-errors');

const app = express();
env.config();
const { server } = config.api_provedor_assinatura;
const { http_port } = server;
// axios.interceptors.request.use((cfg) => {
//   cfg.httpsAgent = new https.Agent({ rejectUnauthorized: false });
//   return cfg;
// });
app.use(logger('dev'));
// app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(http_port, () => {
    console.log(`http://localhost:${http_port}`);
});