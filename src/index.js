const express = require('express');
const viewEngineSetup = require('./config/viewEngine');
const routes = require('./config/routes');
const config = require('./config/config');
const initDB = require('./config/database');
const userSessionMiddleware = require('./middleware/userSession');
const cookieParser = require("cookie-parser");

const app = express();
viewEngineSetup(app);

//session middleware
app.use(userSessionMiddleware);

app.use(express.static('src/static'));
app.use(express.urlencoded({
    extended: false
}));

//cookie-parser middleware
app.use(cookieParser());

app.use(routes);

initDB()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on PORT: ${config.PORT}...`)))
    .catch((err) => console.log(err));

