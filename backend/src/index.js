const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://leandroDBAtlas:vs1998op@cluster0-x9v91.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(3333);