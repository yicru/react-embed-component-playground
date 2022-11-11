import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <React.StrictMode>
      <img src="https://placehold.jp/150x150.png" alt="" />
    </React.StrictMode>
  );
};

export const init = (target: string) => {
  const container = document.getElementById(target);
  if (!container) {
    throw new Error("Target Element not found");
  }
  const root = createRoot(container);
  root.render(<App />);
};
