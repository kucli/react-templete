const compat = 'preact-compat';

module.exports = {
  // 指定 rootDir 对应的路径，如果与 jest.config.js 文件所在的目录相同，则不用设置
  rootDir: './',
  // 使用 ts-jest 作为预处理器
  // 参考：https://kulshekhar.github.io/ts-jest/docs/getting-started/presets
  preset: 'ts-jest/presets/js-with-ts',
  // 是否报告每个test的执行详情
  verbose: true,
  // 覆盖率结果输出的文件夹
  coverageDirectory: '__tests__/coverage',
  // 模块后缀名
  moduleFileExtensions: ['js', 'json', 'ts', 'jsx', 'tsx'],
  // 初始化配置文件路径
  // setupFiles: [
  //   '<rootDir>/__tests__/setup/jest.setup.ts',
  //   '<rootDir>/__tests__/setup/mock.setup.ts',
  // ],
  // 测试运行环境，jsdom类浏览器环境
  testEnvironment: 'jsdom',
  // 匹配测试文件
  // testMatch: [
  //   '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  //   '<rootDir>/__tests__/*.{js,jsx,ts,tsx}',
  // ],
  // 忽略测试文件
  testPathIgnorePatterns: ['/node_modules/'],
  // 模块别名，注意要根据项目实际的 tsconfig.json 配置更新
  // moduleNameMapper: {
  //   // 简单模拟静态资源的导入，因为已经使用了下面的 transform 字段配置处理方式，所以此处注释掉
  //   // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //   //   '<rootDir>/__tests__/mock/file/index.js',
  //   // 识别模块相对地址
  //   '^(api|utils|actions|components|helpers|reducers|models)/(.*)$':
  //     '<rootDir>/src/$1/$2',
  //   // 识别全局测试文件
  //   '^__tests__/(.*)$': '<rootDir>/__tests__/$1',
  //   '^react/jsx-runtime$': 'preact/jsx-runtime',
  //   '^react-dom$': compat,
  //   '^react$': compat,
  //   '^react-dom/server$': 'preact-render-to-string',
  //   // 代理css文件的导入
  //   '\\.(c|le)ss$': 'identity-obj-proxy',
  //   '^common-components/(.*)$': '<rootDir>/editor-components/src/$1',
  // },
  // 因为要模拟实际的静态资源载入情况，所以指定了特定文件的处理器
  // transform: {
  //   // 代理静态资源的导入
  //   // 已经指定了预处理器为 ts-jest, 所以下面不用再手动指定 js 文件的处理器
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/__tests__/mock/file/transformer.js',
  //   // 此种静态资源模拟导入方式，就需要显示的配置 babel-jest 为 js 文件的处理器
  //   // 参考：https://jestjs.io/zh-Hans/docs/webpack#模拟-css-模块
  //   // '\\.[jt]sx?$': ['babel-jest', { rootMode: 'upward' }],
  // },
  // 编译时不忽略node_modules/@fe文件夹
  // transformIgnorePatterns: ['/node_modules/(?!@(fe|szzbmy))'],
  moduleDirectories: ['node_modules', 'src'],
};
