const express = require('express');
const compression = require('compression');
const path = require('path');
// const helmet = require('helmet');
// const historyApiFallback = require('connect-history-api-fallback');
// const { createProxyMiddleware } = require('http-proxy-middleware');

const _API_URL="/users/";


const app = express();
const port = process.env.PORT || 9999;
const distPath = path.join(__dirname, './dist');

const testData=require('./src/mock/test.json');


const SuccessData={
    "code": "Success",
    "message": "string",
    "data":{}
  }

app.use(compression());

app.get(_API_URL+'query', function (req, res) {
    res.send(testData)
});
app.post(_API_URL+'query', function (req, res) {
    res.send(SuccessData)
  });


app.use(express.static(distPath));




app.listen(port, (err) => {
  console.log('vite ui run port:',port);
  console.warn('if you need hot reload, use PM2 to watch. see detail backend\\readme.md');
  if (err) {
    console.log(err);
  }
})