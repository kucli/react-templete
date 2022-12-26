import JSEncrypt from 'jsencrypt';
// 加密公钥
const key = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC2A8EEr4uI8Guuqc396EPHp4VUCula+QHPBcvSyYXu7nwbX3KkmfJ3lvXbh5ZBOT6at78TgG+WmtMkCeLlw7i5I/0jHQuJ3F2XT9YHdUSrQjQJM2Bii/bY35lP2XYMGm0+uDZUPRHb8via9FHsO0E/ipe2EOyqo2ts7qB8BNYzjwIDAQAB`;
// 加密
const rsaEncrypt = function (msg) {
  const jsencrypt = new JSEncrypt();
  jsencrypt.setPublicKey(key);
  const encryptMsg = jsencrypt.encrypt(msg);
  return encryptMsg;
};
export { rsaEncrypt };
