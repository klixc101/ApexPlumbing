const express = require('express');
const path = require('path');
const app = express();
const port = 3017;

function sendPage(res, file, status = 200) {
  res.status(status).sendFile(file, { root: __dirname, dotfiles: 'allow' });
}

// Serve the Apex Flow site and its static assets.
app.use('/assets', express.static(path.join(__dirname, 'assets'), { maxAge: '7d', dotfiles: 'allow' }));

app.get('/', (req, res) => sendPage(res, 'index.html'));
app.get('/robots.txt', (req, res) => res.type('text/plain').sendFile('robots.txt', { root: __dirname, dotfiles: 'allow' }));
app.get('/sitemap.xml', (req, res) => res.type('application/xml').sendFile('sitemap.xml', { root: __dirname, dotfiles: 'allow' }));
app.get(['/emergency-plumber-chesterfield', '/emergency-plumber-chesterfield/'], (req, res) => sendPage(res, 'emergency-plumber-chesterfield/index.html'));
app.get(['/plumber-chesterfield', '/plumber-chesterfield/'], (req, res) => sendPage(res, 'plumber-chesterfield/index.html'));
app.get(['/bathroom-fitter-chesterfield', '/bathroom-fitter-chesterfield/'], (req, res) => sendPage(res, 'bathroom-fitter-chesterfield/index.html'));
app.get(['/bathroom-installations-chesterfield', '/bathroom-installations-chesterfield/'], (req, res) => sendPage(res, 'bathroom-installations-chesterfield/index.html'));
app.get(['/leak-repairs-chesterfield', '/leak-repairs-chesterfield/'], (req, res) => sendPage(res, 'leak-repairs-chesterfield/index.html'));
app.get(['/shower-installations-chesterfield', '/shower-installations-chesterfield/'], (req, res) => sendPage(res, 'shower-installations-chesterfield/index.html'));

app.use((req, res) => sendPage(res, '404.html', 404));

app.listen(port, () => {
  console.log(`Apex plumbing backend listening at http://localhost:${port}`);
});
