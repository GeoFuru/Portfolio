import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { LanguageProvider } from "./i18n/LanguageContext";
import "./App.css";
import "./styles/geofuru-project-typography-fix.css";
import "./styles/project-detail.css";
import "./styles/about-page.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
  <LanguageProvider>
    <App />
  </LanguageProvider>
</StrictMode>
);
