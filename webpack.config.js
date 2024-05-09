const webpack = require("webpack");

module.exports = {
  /* ... */

  resolve: {
    fallback: {
      process: require.resolve("process/browser"),
      zlib: require.resolve("browserify-zlib"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util"),
      buffer: false,
      asset: require.resolve("assert"),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    //   process: "process/browser",
    }),
  ],
  
  allowedHosts:[
        'nodon.in',
        'www.nodon.in',
        'ec2-3-110-204-20.ap-south-1.compute.amazonaws.com'
        'localhost',
  ],
  

  /* ... */
}





allowedHosts:[
        'nodon.in',
        'www.nodon.in',
        'ec2-3-110-204-20.ap-south-1.compute.amazonaws.com'
        'localhost',
  ]
