/// <reference path="reducers/index.d.ts" />
/// <reference path="actions/index.d.ts" />
/// <reference path="tabs/activity/flow-editor/index.d.ts" />
/// <reference path="tabs/client/index.d.ts" />
/// <reference path="components/common/umeditor/index.d.ts" />
/// <reference path="@fe-types/points-mall" />

declare module 'react-color/lib/components/common' {
  import { Component } from 'react';
  import { CustomPickerProps } from 'react-color';

  interface NewCustomPickerProps<A> extends CustomPickerProps<A> {
    direction?: string;
  }
  export type AlphaProps = NewCustomPickerProps<Alpha>;

  export class Alpha extends Component<AlphaProps> {}
  export { default as Checkboard } from 'react-color/lib/components/common/Checkboard';
  export { default as EditableInput } from 'react-color/lib/components/common/EditableInput';
  export { default as Hue } from 'react-color/lib/components/common/Hue';
  export { default as Saturation } from 'react-color/lib/components/common/Saturation';
}

/**
 * 坐标点
 * @interface Point
 */
interface Point {
  x: number;
  y: number;
}

/**
 * 位置点
 * @interface Pixel
 */
interface Pixel {
  left: number;
  top: number;
}

/**
 * 尺寸大小
 * @interface Size
 */
interface Size {
  width: number | string;
  height: number | string;
}

interface NSize {
  width: number;
  height: number;
}

/**
 * 矩形范围
 * @interface Rect
 */
interface Rect {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

/**
 * 组件免重复声明属性：className、style
 * 有需要用到className或style属性的组件，可以继承此接口来声明
 */
interface ComponentProps {
  className?: string;
  style?: Record<string, string | number>;
}

// 低码 json schema 信息
interface SchemaInfo {
  /** 版本号 */
  version: string;
  /** cdn地址 */
  url: string;
}

interface Window {
  RPDataChart: any;
  RP_DATA_CHART: any;
  RPCONFIG: {
    mainHost: string;
    ssoHost: string;
    workbenchHost: string;
    iframe_private_host: string;
    bwsHost: string;
    cdnPrefix: string;
    upload_server?: 'Q' | 'T' | 'A';
    RUNTIME_ENV: string;
    isRabbitpreEnv?: boolean;
    data_sdk: string;
    data_sdk_host: string;
    staticHost: string;
    fibo_sdk: {
      url: string;
      enable: boolean;
      pfid?: string;
      platform?: string;
      fiboApiHost?: string;
    };
    isPraviteEnv?: boolean;
    miniprogram_editor_host: string;
    data_chart_sdk: string;
    code_editor_sdk: string;
    yule_editor_host: string;
    importerHost: string;
    workbench_mobile_host: string;
    render_host: string;
    link_options: {
      // 统一的链接跳转是否发消息
      message: boolean;
      // 统一的链接跳转是否跳转
      jump: boolean;
      // 是否是第三方平台
      third: boolean;
    };
    download_template_url: {
      /** 安全防刷sdk接入模板 */
      safe_anti_brush: string;
      workbench_channel_employee: string;
      workbench_channel_fixed: string;
      audiencel_import: string;
      channel_employee: string;
      channel_pass_employee: string;
      channel_workwechat_employee: string;
      data_import_disclaimer: string;
      ext_fibosdk: string;
      ext_fibosdk_miniApp: string;
      marketing_catalog_attach: string;
      marketing_catalog_attach_video: string;
      // 数据导入模板
      user_jz_tag: string;
      user_jz_group: string;
      user_mh_group: string;
      user_mh_tag: string;
      // 奖品导入 - 单兑换码导入
      prize_import_single_code: string;
      // 奖品导入 - 卡号卡密导入
      prize_import_card_secret: string;
      // 子账号管理 - 账号导入模板
      sub_account_import_template: string;
      // 积分批量导入模版
      batch_modify_points_template: string;
      sensitive_word_Tempt: string;
    };
    // 公文包上傳文件服務器
    attache_pack: {
      cdn_bucket: string;
      upload_server?: 'Q' | 'T' | 'A';
    };
    // 公文包上傳文件cdn服務器
    package_cdn: string;
    // 登录成功后是否向父窗口推送消息
    login_post_message: boolean;
    // 是否在作品列表显示新建作品
    create_app_btn: boolean;
    // 第三方平台用户
    // opfUser 已弃用，判断 第三方平台用户、开放平台用户或者是否隐藏兔展品牌信息 使用 static\src\utils\index.ts 中的 isOtherEnv 方法
    // opfUser: boolean;
    // 无query参数通过浏览器直接进入数据路由时，是否要尝试从localStorage获取query参数
    data_init_query_cache: boolean;
    // 是否使用腾讯定制皮肤主题
    theme: boolean;
    // 环境标识
    env: 'rabbitpre' | 'tencent_cloud';
    // 可被隐藏的模块/元素
    hidden_modules: ModuelsCanBeHidden[];
    /** kol图表上线时间 由于kol图表上线后大数据数据会有变化，因此需要上线时间与作品的创建时间做限定 */
    kol_release_time?: number;
    // 是否使用工作台内置的404页面，针对一些平台不需要显示兔展相关信息的情况，默认false
    default_404: boolean;
    // 批量导入用户模板
    clientImportTemplate: {
      accurate: string;
      vague;
    };
    // 导入数据免责声明
    dataImportDisclaimer: string;
    enableProject: boolean;
    frame_host_whitelist?: string[];
    // 企业微信授权回调地址
    wework_redirect?: string;
    // 會話存檔配置
    client_conversation: {
      // 騰訊地圖api地址
      qqMap: string;
    };
    // 插件名称映射
    plugins?: Record<any, string>;
    // 商户号的服务器IP
    merchant_server_ip?: string[];
    // 任務分發導入文件模板下載鏈接
    taskImportFileTemplate?: string;
    // 数据集成文档
    open_data_url: Record<string, string>;
    // 工作台企业微信相关说明
    workWechatInstructions?: string;
    // 工作台企業微信應用安裝模式的详细差异
    workWechatAppComparison?: string;
    // 可使用代码导出的白名单企业
    codeExportWhitelist?: string[];
    // 低码 jsonSchema 配置
    lowcode_json_schema: {
      // 数据源 schema
      datasource: SchemaInfo;
    };
    // 高级筛选组件要隐藏的key 只在 isPraviteEnv === true 时生效
    filterAdvancedComponentHiddenKeys: stirng[];
    /**
     * 临时解决方案 - 20220421
     * 针对配置中的企业隐藏海报编辑器入口
     * 在针对 内容类型创建 做权限控制需求时需要移除该字段相关判断
     */
    cannotInPosterOrgs?: string[];
    // 如何绑定微信公众号
    wechat_config?: string;
    // 微信红包文档
    wechat_redpacket_doc?: string;
    // 微信授权配置
    weChatAuthConfig?: Record<string, any>;
  };
  userInfo: UserModel;
  companyInfo: CompanyModel;
  routeList: Record<string, any>[];
}

declare module 'd3-cloud';
declare module 'd3';
declare module 'react-dates/constants';
declare module 'lodash';

interface ImgReferer {
  referrerpolicy?: string;
}

interface Navigator {
  msSaveBlob?: (blob: any, defaultName?: string) => boolean;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace JSX {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface IntrinsicElements {
    img: React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    > &
      ImgReferer;
    'wx-open-launch-weapp': any;
    'ww-open-data': {
      type: 'userName' | 'departmentName';
      /** type=userName，此时 openid 对应 userid,
       * type=departmentName，此时 openid 对应 departmentid, 20ms
       * 最多绑定 1000 个 open-data 元素，超出的部分将被忽略 */
      openid: string;
      /** 文档没有，但是看到接口有用！！！艹。垃圾文档 */
      corpid?: string;
    };
  }
}

declare module '*.png';
declare module '*.json';
declare module '*.css';
declare module '*.less' {
  const content: any;
  export default content;
}

type PermissionKeys = {
  permissionName: string;
  isCheck: boolean;
  permission: string;
};

// 用于根路由组件注入当前页面的权限列表
interface IPermissionInject {
  // 当前页面的权限列表
  permissionKeys: PermissionKeys[];
  // 用于获取其他指定页面的权限列表
  getPermissionListByName: (name: string) => PermissionKeys[];
}
