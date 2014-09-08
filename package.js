Package.describe({
  summary: "A username blacklist",
  version: "1.0.0",
  name: "servicelocale:username-blacklist",
  git: "https://github.com/ServiceLocale/meteor-username-blacklist"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('username-blacklist.js');
  api.use("accounts-password");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('username-blacklist');
  api.addFiles('username-blacklist-tests.js');
});