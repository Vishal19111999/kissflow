var express = require('express');
var router = express.Router();


var https = require('follow-redirects').https;
var fs = require('fs');

/* GET location listing. */
router.post('/', function(req, res, next) {


  var options = {
    'method': 'POST',
    'hostname': 'wcubeindia.kissflow.com',
    'path': '/integration/2/Ac3kSrYZvhMXM/webhook/bwPy6lCeykerb6tEx76ZNU-CjR6nWtiDpuKs9fKED6rtekgwT640ArNMTa04fNlt2jhXB4up9FHjJhgdA',
    'headers': {
      'Content-Type': 'application/json',
      'Cookie': '__cfruid=d0823d829b4d864f9b1e28f754b31ae5b59daa8f-1634967655'
    },
    'maxRedirects': 20
  };

  var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });

    res.on("error", function (error) {
      console.error(error);
    });
  });

  var postData = JSON.stringify({
    "Latitude": 32432.324,
    "Longitude": 123121.434
  });

  req.write(postData);

  req.end();

  res.send('done');
});

module.exports = router;
