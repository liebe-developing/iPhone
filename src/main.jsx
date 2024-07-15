import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import * as Sentry from "@sentry/react";

import "./index.css";

Sentry.init({
  dsn: "https://00825ecf555c97af386e1310cecdeea1@o4507607524704256.ingest.us.sentry.io/4507607865622528",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
