import React, { useEffect } from 'react';
import instance from '../../util/instance';
import ContextCom from './page/context';
const rqCors = async () => {
  return await instance.get(`/cors/getCors`);
};

const ReactLearn = () => {
  useEffect(() => {
    rqCors();
  }, []);
  return (
    <div className="react-learn">
      <ContextCom />
    </div>
  );
};
export default ReactLearn;
