import express from 'express';

const app = express();

app.get('/api/notes', (req, res) => {
  res.send('Notes app is ready for the development.');
});

app.listen(5001, () => {
  console.log('Server started on PORT: 5001');
});
