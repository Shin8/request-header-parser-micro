var express = require('express');
var port = process.env.PORT;
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
  res.json({
    ip: req.header('x-forwarded-for').split(',')[0], 
    lang: req.headers['accept-language'].split(',')[0], 
    os: req.headers['user-agent'].split(/[()]/)[1].split(';')[0]
  });
});
app.listen(port, console.log(`Server listening at port: ${port}`));