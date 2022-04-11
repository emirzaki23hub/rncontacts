module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  // add the below line
  "plugins": [
    ["react-native-reanimated/plugin"],
    ["module:react-native-dotenv", {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": ".env",
      "blocklist": null,
      "allowlist": null,
      "blacklist": null, // DEPRECATED
      "whitelist": null, // DEPRECATED
      "safe": false,
      "allowUndefined": true,
      "verbose": false
    }]
  ]

  // this should be always last line
};
