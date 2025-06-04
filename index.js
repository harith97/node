const express = require('express');
const request = require('request');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.send('Hello World!');
});


app.get('/pinetools', function(req, res) {
  request('https://pinetools.com', function(error, response, body) {
    // Inject custom CSS or JS
    const modified = body.replace(
      '</head>',
      `<style>body { background: black !important; #header{    display: none; } }</style><script></script></head>`
    );
    res.send(modified);
  });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});