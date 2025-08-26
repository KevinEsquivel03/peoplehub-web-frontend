import React from "react";
interface LoadingProps {
  size?: "small" | "medium" | "large";
  text?: string;
  overlay?: boolean;
  inline?: boolean;
}
declare const Loading: React.FC<LoadingProps>;
export default Loading;
