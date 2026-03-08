import App from "./App.tsx";
import "./index.css";
import { LightboxProvider } from "./context/LightboxContext.jsx";
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById("root")!).render(
  <LightboxProvider>
    <App />
  </LightboxProvider>
);