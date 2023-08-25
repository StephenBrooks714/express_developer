const express = require('express')
const app = express();
require('dotenv').config();
const path = require('path')

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

if(mongoose){
    console.log('db connected')
} else {
    console.log('no db connected')
}

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, ('public'))));

const homePage = require('./controllers/homePageDB');

app.listen(process.env.PORT, () => {
    console.log('app listening')
})

app.get('/', (req, res) => {
    res.render('index')
})