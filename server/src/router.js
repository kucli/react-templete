import upload from './servers/upload';
import wechatAuth from './app/wechatAuth';
import cors from './app/cors';
const routes = {
  '/upload': upload,
  '/wechatAuth': wechatAuth,
  '/cors': cors,
};

export default routes;
