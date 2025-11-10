const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const users = [
  { id: 1, name: 'Sabina', email: 'sabina@gmail.com' },
  { id: 2, name: 'Saba', email: 'saba@gmail.com' },
  { id: 3, name: 'Sad', email: 'sad@gmail.com' },
];

app.get('/user', (req, res) => {
  res.send(users);
});

app.get('/', (req, res) => {
  res.send('User Management server is running');
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
