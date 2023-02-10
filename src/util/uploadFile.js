const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './src/static/images'); //or /src/static/images
        // callback(null, path.join(__dirname, '../src/static/images'));
    },
    filename: (req, file, callback) => {
        // callback(null, path.join(req.body.imageUrl));
        callback(null, file.originalname);
    }
});

const upload = multer({storage});

module.exports = upload;