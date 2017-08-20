var express = require('express');
var path=require('path');
var bodyParser = require('body-parser');
module.exports =  (PORT) => {
  const app = express();
  app.use(bodyParser.json());
  app.get('/api/v1/facts', function(req,res) {
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

  app.put('/api/v1/facts/:id', function(req, res) {
    console.log("Upsert fact: id=" + req.params.id + ". Body=" + JSON.stringify(req.body));
    res.sendStatus(201);
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
