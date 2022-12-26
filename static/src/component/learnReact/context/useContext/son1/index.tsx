import React from 'react';
import { useContext } from 'react';
import { useContext1 } from '../../../../../Page/learnReact/page/context/context';
const UsecontextSon = () => {
  const contextuse = useContext(useContext1);
  console.log({ contextuse });
  return <div className="son-usecontext">{contextuse.age}</div>;
};

export default UsecontextSon;
