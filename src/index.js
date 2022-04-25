const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

var multer = require('multer');
app.use(multer().any())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Rishabh:Rishabh3009@cluster0.pjvkl.mongodb.net/Project-5", {useNewUrlParser: true})
    .then(() => console.log('MongoDB is connected.. oh yeah..!!'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 4000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 4000))
}); 