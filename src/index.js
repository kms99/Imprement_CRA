import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// index.html에 선언한 진입점 (id=root)에 render하기 위한 참조
const root = ReactDOM.createRoot(document.getElementById("root"));

// 진입점에 App 컴포넌트 랜더
root.render(<App />);
