const userService = require('../services/userService');

exports.getRegister = (req, res) => {
    res.render('join');
};

exports.postRegister = async(req, res) => {
    const { name, email, password } = req.body;
   
    //TO DO: think of validator function to validate the data in each field
   try {
        await userService.register(name, email, password);
   } catch (error) {
        console.log(`Error trying to POST register: ${error}`);
   }
    
    
    //res.redirect('sign-in');
};