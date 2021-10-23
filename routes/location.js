var express = require('express');
var router = express.Router();


var https = require('follow-redirects').https;
var fs = require('fs');

/* GET location listing. */
router.post('/', function(req, res, next) {


  var options = {
    'method': 'POST',
    'hostname': 'wcubeindia.kissflow.com',
    'path': '/integration/2/Ac3kSrYZvhMXM/webhook/z7xgnJZBz93OBTlP602K4gKtxIxh4n1Mn0FbLWfciTINJkZbGbnLQa0xzyYpbmqKoYtmZZYaproffMB8hmRPw',
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
