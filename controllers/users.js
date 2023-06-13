const User = require("../models").User; //imported fruits array
// const Package = require("../models").Package;
// const User = require("../models").User;
const { Op } = require("sequelize");
const crypto = require('crypto'); 
const secretKey = process.env.secretkey
const jwt = require('jsonwebtoken');
//handle index request
const showAll = (req,res) =>{
    User.findAll({
        where:{
            FLAGDELETE:'N'
        }
    }).then((users)=>{
        res.json(users);
    }).catch((err)=>
        res.send(err)
    )
}

const showOne = (req, res) => {
  User.findOne ({
    
    where: {
        USERID: req.params.index
    }
  }).then((user) => {
    res.json(user);
  });
};

const signup = (req,res)=>{
    const password = req.body.PASSWORD
    // hash password
    const hash = crypto.pbkdf2Sync(password, secretKey,  
        1000, 64, `sha512`).toString(`hex`); 
        req.body.PASSWORD = hash

        User.create(req.body)
            .then((newUser) => {
              const token = jwt.sign(
                {
                    USERID: newUser.USERID,
                },
                secretKey,
                {
                  expiresIn: "2 hours",
                }
              );
              res.json({ jwt: token });
            })
            .catch((err) => {
              res.sendStatus(401);
            });

    
}
const login = (req,res)=>{
    User.findOne({
        where: {
            USERNAME: req.body.USERNAME
          }
    }).then(foundUser => {
        if (foundUser === null) {
          return res.status(201).json({ errors: [{ msg: "USER NOT FOUND" }] })
        } else{
            const hash = crypto.pbkdf2Sync(req.body.PASSWORD, secretKey,  
                1000, 64, `sha512`).toString(`hex`); 
            //check password
            if(hash == foundUser.PASSWORD){
                const token = jwt.sign(
                    {
                        USERID: foundUser.USERID,
                    },
                    secretKey,
                    {
                      expiresIn: "2 hours",
                    }
                  );
                  res.status(200).json({ jwt: token });
            }else{
                res.status(202).json({ errors: [{ msg: "WRONG PASSWORD" }] })
            }
        }
    }).catch((err) =>{
        res.status(501).send(err)
    })
    
}

module.exports = {
  showAll,
  showOne,
  signup,
  login,
  // postCar,
  // removeCar,
  // editCar,
};