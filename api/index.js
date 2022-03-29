const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/teste', (req, res) => {
    res.status(200).send({
        message: 'Hello World'
    });
});

app.listen(3006, () => console.log('servidor funcionando'));
