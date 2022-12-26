// const Process = require('.env')
const express = require('express');

const router = express.Router();
router.use(function timeLog(req, res, next) {
  // bodyParser.urlencoded({
  //   extended: false,
  //   limit: '1024mb',
  // })
  // console.log(`req.url:${req.body}`);
  next();
});

router.get('/getCors', async (req, res) => {
  const url = 'http://www.baidu.com';
  res.send({
    data: {
      code: 0,
      url,
    },
  });
});

export default router;
