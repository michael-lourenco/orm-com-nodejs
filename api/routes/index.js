const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');

module.exports = (appRecived) => {
    appRecived.use(bodyParser.json());
    appRecived.use(pessoas);
}
