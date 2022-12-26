const AppID = 'wx2f80afcbd5a924e9';
const AppSecret = 'c8792ce139e1832ffbdf3a20e1684900';
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

router.get('/getCode', async (req, res) => {
  console.log('getCode');
  const url =
    'https://open.weixin.qq.com/connect/oauth2/' +
    `authorize?appid=${AppID}&redirect_uri=${encodeURIComponent(
      'http://localhost:3000/'
    )}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
  res.send({
    data: {
      code: 0,
      url,
    },
  });
});

export default router;
