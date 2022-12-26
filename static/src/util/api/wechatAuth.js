import instance from '../instance';

const getCode = async () => {
  try {
    const res = await instance.get('/getCOde');
    return res;
  } catch (e) {
    console.log({ e });
  }
};
const getUserInfoByAuthCode = async (authCode) => {
  return await instance.get(`/api/middleware/toc/user/getUserInfo/${authCode}`);
};

export { getCode, getUserInfoByAuthCode };
