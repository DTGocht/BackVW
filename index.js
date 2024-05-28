
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors());

var CONNECTION_STRING= "mongodb+srv://diegogocht:BackVW@backvw.fmbadp6.mongodb.net/?retryWrites=true&w=majority&appName=BackVW";
var DATABASE_NAME = "Equipo6VW";
var database;
var port = process.env.PORT || 3000;

MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.error('Failed to connect to MongoDB:', error);
        return; // No seguir adelante si hay un error
    }
    database = client.db(DATABASE_NAME);
    console.log("MongoDB Connected!");
    startServer(); // Iniciar el servidor solo después de conectar a la DB
});

function startServer() {
    app.listen(port, function() {
        console.log(`Server running on port ${port}`);
    });
}

app.get('/', function(req, res) {
    res.send('Hello World!');
});


app.get('/eventos', (request, response) => {
    if (!database) {
        response.status(500).send("Database not initialized");
        return;
    }
    database.collection("Eventos").find({}).toArray((error, result) => {
        if (error) {
            response.status(500).send(error);
            return;
        }
        response.send(result);
    });
});


app.get('/noticias', (request, response) => {
    if (!database) {
        response.status(500).send("Database not initialized");
        console.log("Database not initialized");
        return;
    }
    database.collection("Noticias").find({}).toArray((error, result) => {
        if (error) {
            response.status(500).send(error);
            return;
        }
        response.send(result)

    });
});

