module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-private-property-in-object",
    ["@babel/plugin-proposal-optional-chaining-assign",
      {version: "2023-07"},
    ],
  ],
};
