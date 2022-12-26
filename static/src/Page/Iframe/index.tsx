import React, { useEffect, useRef, useState } from 'react';
const Iframe = () => {
  const _iframe = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(false);
  const _iframeLaod = () => {
    setLoading(true);
  };

  const receiveMessageFrom = (params: any) => {
    if (params && params.data) {
      console.log('接收xiaoxi');
      console.log(params.data);
    }
  };
  useEffect(() => {
    window?.addEventListener('message', receiveMessageFrom, false);
    const windowC = _iframe.current?.contentWindow;
    if (!!windowC) {
      if (!loading) return;
      console.log('fashe');
      windowC.postMessage('发送消息给子框架', '*');
    }
  }, [loading]);

  return (
    <div className="body" id="container">
      <iframe
        onLoad={_iframeLaod}
        frameBorder="0"
        id="child"
        ref={_iframe}
        // src="http://127.0.0.1:5555/IframePage/page1.html"
        src="https://www.bilibili.com/video/BV1De41157J4/?spm_id_from=333.851.b_7265636f6d6d656e64.2"
        name="baidu"
        width="100%"
        height="50%"
        title="page1"
      />
    </div>
  );
};

export default Iframe;
