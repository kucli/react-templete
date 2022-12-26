const deepcopy = (obj) => {
  let newobj = null;
  if (isObject(obj)) {
    newobj = Array.isArray(obj) ? [] : {};
    for (let i in obj) {
      newobj[i] = isObject(obj[i]) ? deepcopy(obj[i]) : obj[i];
    }
  } else {
    newobj = isObject;
  }
  return newobj;
};

// 判断obj是不是对象
const isObject = (obj) => {
  return typeof obj === 'object' && typeof obj !== null;
};

export default deepcopy;
