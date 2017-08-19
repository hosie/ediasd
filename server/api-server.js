var express = require('express');
var path=require('path');

module.exports =  (PORT) => {
  const app = express();
  app.use('/api', function(req,res) {
    console.log("API");
  });
  app.use('/',express.static(path.join(__dirname,"../client/public")));

  app.listen(PORT, function() {
    console.log("Started backend");
  });
};
