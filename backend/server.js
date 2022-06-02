//EXPRESS:Express bietet uns eine unkomplizierte Middleware für die Weiterverwaltung von http-Anfragen an die Datenbank und zurück.
//server.js wird benutzt um Express zu benutzen

//erstellen Variable um express zu initilaisieren

//Starte backend mit node server.js
//Models ordner ist posts.js

const express = require('express');
const routes = require('./routes');// hier um Routen zu holen von der routes-datei
const app = express();
const PORT = 3000;//Port wird initilaisiert //Das backend ist somit unter http://localhost:3000 verfügbar.
const mongoose = require('mongoose');
require('dotenv').config();
//Die Same Origin Policy (SOP) ist ein Sicherheitskonzept, das clientseitig Skriptsprachen (also z.B. JavaScript oder CSS)
// untersagt, Ressourcen aus verschiedenen Herkunften zu verwenden, also von verschiedenen Servern.
// Dadurch soll verhindert werden, dass fremde Skripte in die bestehende Client-Server-Kommunikation eingeschleust werden.
// Gleiche Herkunft (origin) bedeutet, dass das gleiche Protokoll (z.B. http oder https),
// von der gleichen Domain (z.B. localhost oder htw-berlin) sowie dem gleichen Port (z.B. 80 oder 4200) verwendet werden.
const cors = require('cors');


app.use(express.json());
// enable cors for all requests
app.use(cors());
app.use('/', routes);//benutzter Pfad der Routen

//Das eigentliche Starten des Webservers
app.listen(PORT, (error) => {//Callback falls wir Fehler haben dann gib uns Error Nachricht an ansonsten
    if (error) {
        console.log(error);
    } else {//gebe uns dies an
        console.log(`server running on http://localhost:${PORT}`);
    }
});

// connect to mongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected to DB');
});