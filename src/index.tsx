import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import App from "./App";
import { MantineProvider } from "@mantine/core";
import { MantineEmotionProvider } from "@mantine/emotion";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <MantineEmotionProvider>
          <App />
        </MantineEmotionProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
