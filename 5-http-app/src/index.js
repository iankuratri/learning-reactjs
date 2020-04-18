import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import logger from "./services/logService";
import * as Sentry from "@sentry/browser";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn:
    "https://be95b3df8d0c4e969a9453764cdddab0@o379702.ingest.sentry.io/5204872",
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
