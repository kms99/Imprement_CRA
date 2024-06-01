const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 번들링 시작 파일 (진입점)
  entry: "./src/index.js",
  output: {
    // webpack의 결과물이 저장되는 경로
    // __dirname은 현재 파일의 상위 폴더, 즉 root의 dist 폴더를 나타낸다
    // webpack의 결과는 /dist/bundle.js로 저장
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    // 로더설정
    rules: [
      {
        // 로더를 적용할 파일 형식 (.js or .jsx)
        test: /\.(js|jsx)$/,
        // 무시할 디렉토리
        exclude: /node_modules/,
        // webpack과 babel 호환 설정 (babel을 이용한 jsx, es6+ 문법 호환)
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    // import 시 생략할 확장자 명
    extensions: [".js", ".jsx"],
  },
  //웹팩 플러그인 설정
  plugins: [
    new HtmlWebpackPlugin({
      // 번들링된 Javascript 파일을 index.html파일을 기반으로 합친 새로운 html 생성
      template: "./public/index.html",
    }),
  ],
  // 개발서버 설정
  devServer: {
    // 정적파일이 저장되는 (webpack 파일) 디렉토리 지정
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // gzip 압축을 활성화하여 파일크기 최적화
    compress: true,
    // 개발서버 지정
    port: 3000,
  },
};
