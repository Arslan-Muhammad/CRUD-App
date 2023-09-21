import { createSlice } from "@reduxjs/toolkit";

const notes = createSlice({
    name: 'notes',
    initialState: null,
    name: 'createForm',
    initialState: ({
        name: '',
        body: '',
    }),
    name: 'updateForm',
    initialState: ({
        _id: null,
        name: '',
        body: '',
    }),
    reducers: {

    },
});






// const [notes, setNotes] = useState(null);
// const [createForm, setCreateForm] = useState({
//   name: '',
//   body: '',
// });
// const [updateForm, setUpdateForm] = useState({
//   _id: null,
//   name: '',
//   body: '',
// });

// useEffect(() => {
//   fetchNotes();
// }, []);

// const fetchNotes = async () => {
//   const res = await axios.get('http://localhost:3001/notes');
//   setNotes(res.data.note);
// };

// const updateCreateform = (e) => {
//   const { name, value } = e.target;
//   setCreateForm({
//     ...createForm,
//     [name]: value,
//   })
// };
// const createNote = async (e) => {
//   e.preventDefault();
//   const res = await axios.post('http://localhost:3001/notes', createForm);
//   setNotes([...notes, res.data.note]);
//   setCreateForm({ name: '', body: '' });
// };
// const deleteNote = async (_id) => {
//   const res = await axios.delete(`http://localhost:3001/notes/${_id}`);
//   const newNotes = [...notes].filter((note) => {
//     return note._id !== _id;
//   });
//   setNotes(newNotes);
// };
// const updateFieldChange = (e) => {
//   const { name, value } = e.target;
//   setUpdateForm({
//     ...updateForm,
//     [name]: value,
//   })
// };
// const toggleUpdate = (note) => {
//   setUpdateForm({ name: note.name, body: note.body, _id: note._id });

// };
// const updateNote = async (e) => {
//   e.preventDefault();
//   const { name, body, } = updateForm;
//   const res = await axios.put(`http://localhost:3001/notes/${updateForm._id}`, { name, body });
//   const newNotes = [...notes];
//   const noteIndex = notes.findIndex((note) => {
//     return note._id === updateForm._id;
//   });
//   newNotes[noteIndex] = res.data.note;
//   setNotes(newNotes);
//   setUpdateForm({ _id: null, name: '', body: '' });
// };