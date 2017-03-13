var express = require('express');
var path = require('path');

app = express();
app.use(express.static(`${__dirname}/dist`));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

var port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server started ${port}`);
