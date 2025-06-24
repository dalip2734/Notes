export function getAllNotes(req, res) {
  res.status(200).send('You just fetched the notes.');
}
export function createNote(req, res) {
  res.status(201).json({ message: 'You created a note.' });
}
export function updateNote(req, res) {
  res.status(200).json({ message: 'You just updated a note.' });
}
export function deleteNote(req, res) {
  res.status(200).json({ message: 'You just deleted a note.' });
}
