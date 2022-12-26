import React from 'react';
import { useContext } from 'react';
import { useContext1 } from '../../../../Page/learnReact/page/context/context';
import UsecontextSon from './son1/index';
const UsecontextA = () => {
  const contextuse = useContext(useContext1);
  console.log({ contextuse });
  return (
    <div className="body-usecontext">
      {contextuse.name}
      <UsecontextSon></UsecontextSon>
    </div>
  );
};

export default UsecontextA;
