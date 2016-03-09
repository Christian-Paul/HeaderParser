var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.enable('trust proxy');

app.get('/', function(req, res) {
    var ip, language, software;
    
    ip = req.ip;
    language = req.get('Accept-Language').split(',')[0];
    software = req.get('User-Agent').split('(')[1].split(')')[0];
    
    res.json({ IP: ip, Language: language, Software: software });
});

app.listen(port);