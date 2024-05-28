
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors());

var CONNECTION_STRING= "mongodb+srv://diegogocht:BackVW@backvw.fmbadp6.mongodb.net/?retryWrites=true&w=majority&appName=BackVW";
var DATABASE_NAME = "Equipo6VW";
var database;

app.listen(3000, function() {
    MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if (error) {
            console.error('Failed to connect to MongoDB:', error);
            return; // No seguir adelante si hay un error
        }
        database = client.db(DATABASE_NAME);
        console.log("MongoDB Connected!");
    });
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

