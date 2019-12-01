const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://admin:admin@cluster0-t7ocn.mongodb.net/DRAQ-Project2019?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: String,
    poster: String
})

const ProductModel = mongoose.model('product', productSchema);


app.get('/', (req, res) => res.send('Products api'))


// mongodb collections name
app.get('/DRAQ-Project2019', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/products', (req, res) => {

    ProductModel.find((error, data) => {
        res.json({ products: data });
    })
})
// getting products by id
app.get('/api/products/:id', (req, res) => {
    console.log(req.params.id);

    ProductModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})
// posting products
app.put('/api/products/:id', (req, res) => {
    console.log("Edit" + req.params.id);

    ProductModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        })
})
// deleting 
app.delete('/api/products/:id', (req, res) => {
    console.log(req.params.id);

    ProductModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            res.json(data);
        })
})
// post
app.post('/api/products', (req, res) => {
    console.log('Post request Successful');
    console.log(req.body.name);
    console.log(req.body.price);
    console.log(req.body.poster);

    ProductModel.create({
        name: req.body.name,
        price: req.body.price,
        poster: req.body.poster
    });

    res.json('post recieved!');
})
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
})

app.listen(port, () => console.log(`It-World app listening on port ${port}!`))