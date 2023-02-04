const handlebars = require('express-handlebars');

function viewEngineSetup(app) {
    app.engine('hbs', handlebars.engine({ extname: 'hbs'}));
    app.set('view engine', 'hbs');
    app.set('view', './src/views');
}

module.exports = viewEngineSetup;