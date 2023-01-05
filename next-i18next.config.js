module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  // debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "pr", "tr"],
    reloadOnPrerender: true,
  },
  // reloadOnPrerender: process.env.NODE_ENV === "development",
  // serializeConfig: false,
  // loader: false
};
