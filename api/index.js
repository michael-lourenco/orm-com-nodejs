const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/teste', (req, res) => {
    res.status(200).send({
        message: 'Hello World'
    });
});

const port = 3006
app.listen(port, () => console.log(`servidor funcionando na porta ${port}`));
