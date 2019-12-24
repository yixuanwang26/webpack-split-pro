const presets = [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "58",
          safari: "11.1",
          ie: "11"
        },
        // useBuiltIns: "usage",
      },
    ],
  ];
  
  module.exports = { presets };