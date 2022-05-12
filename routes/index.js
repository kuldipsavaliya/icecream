var express = require('express');
var router = express.Router();
var User = require('../Models/userSchema');
const bcrypt = require('bcrypt');

/* GET home page. */
router.post('/register', async function(req, res, next)
{

        if(req.body.password != req.body.confirmpassword)
        {
              res.status(201).json({
                status:"Password and confirm password are not match"
              })
        }

        var bpass = await bcrypt.hash(req.body.password, 12);

        const obj = {
          email:req.body.email,
          password:bpass
        }

        const newuser = await User.create(obj);

        res.status(201).json({
          status:"success",
          data:newuser
          
        })
});
module.exports = router;
