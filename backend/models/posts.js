//Wir werden im Folgenden zeigen, wie ein Schema für posts erstellt wird.
// Das Datenmodell heißt dann Post. Um später auch weitere Schemata, z.B. für user o.ä.
// zu entwicklen und diese zu trennen,
// erstellen wir das Schema in einem eigenen Ordner models.
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//Schema /Spalten
const schema = new mongoose.Schema({
    title: String,
    content: String,
    location: String,
    image_id: String
});
module.exports = mongoose.model('Post', schema);

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



//Weitere Hilfe:
//https://mongoosejs.com/docs/models.html
//https://mongoosejs.com/docs/guide.html