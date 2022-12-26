import React from 'react';
import { getCode, getUserInfoByAuthCode } from '../../util/api/wechatAuth';
// import {useState} from 'react';
interface Istate {
  count: number;
  authCode: string;
}
interface Iprops {
  props1: any;
}
const enum CodeStatus {
  systemError = '100001',
  notAuth = '120001',
  notSign = '210002',
}
const appid = '16df10bf22a74a188b0f4f9b28293410';
const redirectUri = 'https://h5.yxy.h5no2.com/testAuth.html';
const reUrl = `https://enjoy-club-app-api-test.yuexiuproperty.cn/open/services/1.0/authorization.user.mp.auto?applicationId=
${decodeURIComponent(appid)}&redirectUri=${encodeURIComponent(
  redirectUri
)}&scope=snsapi_userinfo`;
export default class Test extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      count: 0,
      authCode: '',
    };
  }

  getUrlAuthCode = (url: string) => {
    return url.split('authCode=')[1].split('&')[0];
  };

  isUrlAuthCode = (url: string) => {
    return url.indexOf('authCode') > -1;
  };

  // eslint-disable-next-line react/no-unused-class-component-methods
  getAuthCode = () => {
    const res = getCode();
    console.log({ res });
  };

  getLocalAuthCode = () => {
    return localStorage.getItem('authCode');
  };

  getUserInfo = async (authCode: string) => {
    const res: Record<string, any> = await getUserInfoByAuthCode(authCode);
    if (res.code === CodeStatus.notSign) {
      //  用户未注册 跳转到注册页面
      // const reSignUrl = `${reUrl}?authCode=${res.data.code}`;
      window.location.href = `https://enjoy-club-app-api-test.yuexiuproperty.cn/open/api/#/pages/mine/register/index?frontUrl=${encodeURIComponent(
        redirectUri
      )}&scene=0&authCode=${res.code.authCode}`;
    } else if (
      res.code === CodeStatus.systemError ||
      res.code === CodeStatus.notAuth
    ) {
      window.location.href = reUrl;
    } else {
      console.log({ res });
    }
  };

  componentDidMount() {
    // 判定是否有authCode
    const url = window.location.href;
    let authCode: any = null;
    if (this.isUrlAuthCode(url)) {
      authCode = this.getUrlAuthCode(url);
      localStorage.setItem('authCode', authCode);
      this.getUserInfo(authCode);
    } else if ((authCode = this.getLocalAuthCode())) {
      this.getUserInfo(authCode);
    } else {
      window.location.href = reUrl;
    }
  }

  render(): React.ReactNode {
    return (
      <div className="body">
        {/* <p className="count">{this.state.count}</p> */}
        <button
          onClick={() => {
            alert(1);
          }}
        >
          授权
        </button>
      </div>
    );
  }
}
