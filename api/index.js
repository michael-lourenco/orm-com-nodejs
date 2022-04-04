const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3006;

routes(app);

app.listen(port, () => console.log(`servidor funcionando na porta ${port}`));
