import upload from './app/upload';
import download from './app/download';
import wechatAuth from './app/wechatAuth';
import cors from './app/cors';
const express = require('express');

const app = express();
const PORT = 8888;
const HOST = 'http://127.0.0.1';
const HOSTNAME = `${HOST}:${PORT}`;
const bodyParser = require('body-parser');
// app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // ​res.setHeader('Set-Cookie', 'mycookie1=value1');

  // console.log("req.body",req);
  req.method === 'OPITIONS'
    ? res.send('CURRENT SERVERICES SUPPORT CROSS DOMAIN REQUEST!')
    : next();
});

app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: '1024mb',
  })
);
app.use('/upload', upload);
app.use('/download', download);
app.use('/wechatAuth', wechatAuth);
app.use('/cors', cors);
app.listen(PORT, () => {
  console.log(`serve is runnig at ${HOSTNAME}`);
});
