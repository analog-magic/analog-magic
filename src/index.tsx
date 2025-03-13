import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./global.css";

import App from "./App";
import { MantineProvider } from "@mantine/core";
import { MantineEmotionProvider } from "@mantine/emotion";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <MantineProvider>
      <MantineEmotionProvider>
        <App />
      </MantineEmotionProvider>
    </MantineProvider>
  </React.StrictMode>,
);
