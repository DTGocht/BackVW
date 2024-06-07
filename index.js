var express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
var cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors());
const { ObjectId } = require('mongodb');
var CONNECTION_STRING= "mongodb+srv://diegogocht:BackVW@backvw.fmbadp6.mongodb.net/?retryWrites=true&w=majority&appName=BackVW";
var DATABASE_NAME = "Equipo6VW";
var database;
var port = process.env.PORT || 3000;
const id = new ObjectId();



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

app.post('/eventos', (request, response) => {
    if (!database) {
        response.status(500).send("Database not initialized");
        return;
    }

    const nuevoEvento = {
        titulo: request.body.titulo,
        descripcion: request.body.descripcion,
        imagen: request.body.imagen,
        duracion_f: request.body.duracion_f,
        duracion_i: request.body.duracion_i,
        dia_evento: request.body.dia_evento,
        restante: request.body.restante,
        lugar: request.body.lugar
    };

    database.collection("Eventos").insertOne(nuevoEvento, (error, result) => {
        if (error) {
            response.status(500).send(error);
            return;
        }
        response.status(201).send(result);
    });
});

app.delete('/eventos/:id', (request, response) => {
    if (!database) {
        response.status(500).send("Database not initialized");
        return;
    }

    const id = request.params.id;
    database.collection("Eventos").deleteOne({ _id: new ObjectId(id) }, (error, result) => {
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
        response.send(result);
    });
});


app.post('/noticias', (request, response) => {
    if (!database) {
        response.status(500).send("Database not initialized");
        return;
    }

    const nuevoEvento = {
        Titulo: request.body.Titulo,
        imagen: request.body.imagen,     
    };

    database.collection("Noticias").insertOne(nuevoEvento, (error, result) => {
        if (error) {
            response.status(500).send(error);
            return;
        }
        response.status(201).send(result);
    });
});


app.delete('/noticias/:id', (request, response) => {
    if (!database) {
        response.status(500).send("Database not initialized");
        return;
    }

    const id = request.params.id;
    database.collection("Noticias").deleteOne({ _id: new ObjectId(id) }, (error, result) => {
        if (error) {
            response.status(500).send(error);
            return;
        }
        response.send(result);
    });
});
