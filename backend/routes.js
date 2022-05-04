//Noch lässt sich unser Programm aber nicht ausführen. Wir benötigen im Projektordner noch eine Datei routes.js.
// Diese wird nämlich in der server.js bereits in Zeile 2 eingebunden und in Zeile 8 verwendet.
//----------------------------------------------------------Wichtig-----------------------------
//Middleware, die die Routen verwaltet
// und request-Objekte an die entsprechende Routen weiterleitet und response-Objekte empfängt.
//Brauchen wir express und nutzen es
const express = require('express');
const router = express.Router();

// eine GET-Anfrage
router.get('/', async(req, res) => {
    res.send({ message: "Hello dein Bakend läuft im Pfad / !" });
});

module.exports = router;
///Damit wir es für andere Daten verwenden könnten benutzen wir dies für außen verfügbar und nutzbar