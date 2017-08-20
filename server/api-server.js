var express = require('express');
var path=require('path');

module.exports =  (PORT) => {
  const app = express();
  app.use('/api/v1/facts', function(req,res) {
    res.json(
      [
        {
          id: 1,
          question: "Who are the organisation that is responsible for health worldwide?",
          answer: "WHO"
        },
        {
          id: 2,
          question: "What is SI unit for power?",
          answer: "Watt"
        }
      ]
    );
  });
  app.use('/api/v1/quizes', function(req, res) {
    res.json(
      [
        {
          due: "",
          facts: [1,2]
        }
      ]
    );
  })
  app.use('/',express.static(path.join(__dirname,"../client/public")));

  app.listen(PORT, function() {
    console.log("Started backend");
  });
};
