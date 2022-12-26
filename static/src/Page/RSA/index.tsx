import React from 'react';
import { rsaEncrypt } from '../../util/ras';

const zhanghao = '12345luomingen';

const renderRSA = (msg) => {
  return rsaEncrypt(msg);
};
const RSA = () => {
  return (
    <div className="body">
      <div>{renderRSA(zhanghao)}</div>
    </div>
  );
};
export default RSA;
