import React from "react";
import ReactDOMClient from "react-dom/client";
import { AppleComByHtmlTo } from "./screens/AppleComByHtmlTo";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AppleComByHtmlTo />);
