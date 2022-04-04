const bodyParser = require('body-parser');

module.exports = (appRecived) => {
    appRecived.use(bodyParser.json());
    //appRecived.use(bodyParser.urlencoded({ extended: true }));
    appRecived.get('/', (req, res) => res.send('olá!'));
}
