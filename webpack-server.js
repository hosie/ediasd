var webpack =require("webpack");
var config = require("./webpack.config.js");
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');
module.exports = (PORT) => {
  const server = new WebpackDevServer(webpack(config), {
    proxy: {
      "*" : `http://localhost:${PORT - 1}`
    },
    contentBase: path.join(__dirname, "../client/app/public"),
    // ... rest of the options
  });
  server.listen(PORT, 'localhost',function() {
	   console.log("Starting server on http://localhost:8080");
   });
}
