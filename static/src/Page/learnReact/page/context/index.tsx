import React from 'react';
import { useState } from 'react';
import UsecontextA from '../../../../component/learnReact/context/useContext/index';
import { useContext1 } from '../context/context';

const Context = () => {
  const [user, setUser] = useState<{
    name: string;
    age: number;
  }>({
    name: '张三',
    age: 18,
  });
  console.log({ user });
  return (
    <div className="context">
      <useContext1.Provider value={user}>
        <UsecontextA />
      </useContext1.Provider>
    </div>
  );
};

export default Context;
