var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 1000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var burgers = require('./controllers/burgers_controller.js');

app.use("/", burgers);

app.listen(PORT, function () {
    console.log("listening on PORT", PORT);
});
