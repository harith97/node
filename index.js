const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const express = require('express');
const request = require('request');

app.get('/pinetools', function(req, res) {
  request('https://pinetools.com', function(error, response, body) {
    // Inject custom CSS or JS
    const modified = body.replace(
      '</head>',
      `<style>body { background: black !important; }</style><script>alert('Injected!');</script></head>`
    );
    res.send(modified);
  });
});

app.listen(3000);