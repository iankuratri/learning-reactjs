import * as Sentry from "@sentry/browser";

function init() {
  console.log("i am  called");

  Sentry.init({
    dsn:
      "https://be95b3df8d0c4e969a9453764cdddab0@o379702.ingest.sentry.io/5204872",
  });
}

export default {
  init,
};
