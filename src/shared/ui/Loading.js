import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import styles from "./Loading.module.css";
const Loading = ({
  size = "medium",
  text,
  overlay = false,
  inline = false,
}) => {
  const spinnerClass = `${styles.spinner} ${size === "large" ? styles.spinnerLarge : ""} ${size === "small" ? styles.spinnerSmall : ""}`;
  const content = _jsxs("div", {
    className: inline ? styles.inline : styles.loadingContainer,
    children: [
      _jsx("div", { className: spinnerClass }),
      text && _jsx("p", { className: styles.text, children: text }),
    ],
  });
  if (overlay) {
    return _jsx("div", { className: styles.overlay, children: content });
  }
  return content;
};
export default Loading;
