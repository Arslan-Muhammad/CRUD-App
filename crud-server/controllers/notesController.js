const Note = require('../models/note')

const fetchNotes = async (req, res) => {
    const note = await Note.find();
    res.json({ note });
};
const createNote = async (req, res) => {
    const { name, body } = req.body
    const note = await Note.create({
        name: name,
        body: body
    });
    res.json({ note });
};
const fetchNote = async (req, res) => {
    const noteId = req.params.id;
    const note = await Note.findById(noteId);
    res.json({ note });
};
const updateNote = async (req, res) => {
    const noteId = req.params.id;
    const { name, body } = req.body
    await Note.findByIdAndUpdate(noteId, {
        name,
        body
    });
    const note = await Note.findById(noteId);

    res.json({ note });
};
const deleteNote = async (req, res) => {
    const noteId = req.params.id;
    await Note.findByIdAndDelete(noteId);
    res.json({ success: "Record deleted" });
};

module.exports = {
    fetchNotes,
    createNote,
    fetchNote,
    updateNote,
    deleteNote,
}