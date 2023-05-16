import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2E3840",
          colorBorder: "#2E3840",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </>
);
