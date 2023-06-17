const express = require('express');
const app = express();
const port = 3000;

// Set up your routes here
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/products', (req, res) => {
  res.sendFile(__dirname + '/products.html');
});

app.get('/seller-profiles', (req, res) => {
  res.sendFile(__dirname + '/seller-profiles.html');
});

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/blog.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/support', (req, res) => {
  res.sendFile(__dirname + '/support.html');
});

app.get('/account', (req, res) => {
  res.sendFile(__dirname + '/account.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
