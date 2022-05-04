//EXPRESS:Express bietet uns eine unkomplizierte Middleware für die Weiterverwaltung von http-Anfragen an die Datenbank und zurück.
//server.js wird benutzt um Express zu benutzen

//erstellen Variable um express zu initilaisieren

//Starte backend mit node server.js
//Models ordner ist posts.js

const express = require('express');
const routes = require('./routes');// hier um Routen zu holen von der routes-datei
const app = express();
const PORT = 3000;//Port wird initilaisiert
//Das backend ist somit unter http://localhost:3000 verfügbar.

app.use(express.json());
app.use('/', routes);//benutzter Pfad der Routen

//Das eigentliche Starten des Webservers
app.listen(PORT, (error) => {//Callback falls wir Fehler haben dann gib uns Error Nachricht an ansonsten
    if (error) {
        console.log(error);
    } else {//gebe uns dies an
        console.log(`server running on http://localhost:${PORT}`);
    }
});

