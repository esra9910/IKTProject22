//Noch lässt sich unser Programm aber nicht ausführen. Wir benötigen im Projektordner noch eine Datei routes.js.
// Diese wird nämlich in der server.js bereits in Zeile 2 eingebunden und in Zeile 8 verwendet.
//----------------------------------------------------------Wichtig-----------------------------
//Middleware, die die Routen verwaltet
// und request-Objekte an die entsprechende Routen weiterleitet und response-Objekte empfängt.
//Brauchen wir express und nutzen es
const express = require('express');
const router = express.Router();

const Post = require('./models/posts');

// eine GET-Anfrage
//router.get('/', async(req, res) => {
//    res.send({ message: "Hello dein Bakend läuft im Pfad / !" });
//});

module.exports = router;
///Damit wir es für andere Daten verwenden könnten benutzen wir dies für außen verfügbar und nutzbar

//Wir nutzen den express.Router,
// um die Routen zu definieren und können mithilfe des Mongoose-Models auf die MongoDB zugreifen.

// GET all posts
router.get('/posts', async(req, res) => {
    const allPosts = await Post.find();//Callback
    console.log(allPosts);
    res.send(allPosts);
});

// POST one post
router.post('/posts', async(req, res) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        location: req.body.location,
        image_id: req.body.image_id
    })
    await newPost.save();
    res.send(newPost);
});

// POST one post via id
router.get('/posts/:id', async(req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id });
        console.log(req.params);
        res.send(post);
    } catch {
        res.status(404);
        res.send({
            error: "Post does not exist!"
        });
    }
});

// PATCH (update) one post
router.patch('/posts/:id', async(req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })

        if (req.body.title) {
            post.title = req.body.title
        }
         if (req.body.content) {
            post.location = req.body.content
        }

        if (req.body.location) {
            post.location = req.body.location
        }

        if (req.body.image_id) {
            post.image_id = req.body.image_id
        }

        await Post.updateOne({ _id: req.params.id }, post);
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Post does not exist!" })
    }
});

// DELETE one post via id
router.delete('/posts/:id', async(req, res) => {
    try {
        await Post.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Post does not exist!" })
    }
});