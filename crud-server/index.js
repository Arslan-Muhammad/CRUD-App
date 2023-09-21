if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const notesController = require('./controllers/notesController');

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get('/notes', notesController.fetchNotes);
app.post('/notes', notesController.createNote);
app.get('/notes/:id', notesController.fetchNote);
app.put('/notes/:id', notesController.updateNote);
app.delete('/notes/:id', notesController.deleteNote)

app.listen(process.env.PORT);