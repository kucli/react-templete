/**
 * 生成随机数
 * @returns
 */
export const createRandom = () => {
  const ran = Math.random() * new Date();
  return ran.toString(16).replace('.', '');
};
