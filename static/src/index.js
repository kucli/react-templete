import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import VConsole from 'vconsole';
import { uploader_server } from '../src/assets/js/config';
console.log(uploader_server);
const isDebug = true;
// 本地开发调试注入vConsole
if (isDebug) {
  // eslint-disable-next-line no-new
  new VConsole();
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
