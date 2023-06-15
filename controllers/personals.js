const CT_User = require("../models").CT_User; 
const Personal = require("../models").CT_Personal; 
// const Package = require("../models").Package;
// const User = require("../models").User;
const { Op } = require("sequelize");
const jwt_decode = require("jwt-decode");

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

const registerPersonal = (req,res)=>{
    const token = req.headers['authorization'].split(" ")[1];
    const userId = jwt_decode(token);
    res.send({USERID : userId.USERID})
    // CT_User.findOne({
    //     order: [
    //         ['PERSONALID', 'DESC'],
    //     ]
    // }).then((item)=>{
    //     const PERSONALID = item.PERSONALID + 1
    //    req.body.PERSONALID = PERSONALID
    //    req.body.USERID = userId.USERID          
    //    CT_User.create(req.body)
    //         .then((newUser) => {
    //           console.log(newUser);
    //         })
    //         .catch((err) => {
    //           res.status(502).json({ errors: [{ msg: "CT_User db" }] })
    //         });
    //     Personal.create(req.body)
    //     .then((newUser) => {
    //         // sendmail w8 status for approve
    //       console.log(newUser);
    //     })
    //     .catch((err) => {
    //       res.status(502).json({ errors: [{ msg: "CT_Personal db" }] })
    //     });

    // }).catch((err) => {
    //     res.sendStatus(502);
    //   });
    
    
}
const approveAgent = (req,res)=>{
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
            //check status login failed
            if(foundUser.LOGINFAIL_NO >= 4){
                    res.status(401).json({ errors: [{ msg: "USER HAS BEEN LOGGED PLEASE CONTACT KWAN!!" }] })
            }else{
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
                    foundUser.LOGINFAIL_NO ++
                    foundUser.save()
                    res.status(401).json({ errors: [{ msg: "WRONG PASSWORD" }] })
                   
                }
            }
            
        }
    }).catch((err) =>{
        res.status(501).send(err)
    })
    
}

const unlockUser =(req,res) =>{
    User.findOne({
        where: {
            USERNAME: req.body.USERNAME
          }
    }).then(foundUser =>{
        //set default password
        const password = '1212312121'
        const hash = crypto.pbkdf2Sync(password, secretKey,  
            1000, 64, `sha512`).toString(`hex`); 
            foundUser.PASSWORD = hash
            foundUser.LOGINFAIL_NO = 0
            foundUser.save()
            res.status(200).json({ msg: `unlock user : ${req.body.USERNAME} success new password is ${password}` });     
    
    }).catch(err =>{
        res.status(501).send(err)
    })
}

module.exports = {
  showAll,
  showOne,
  registerPersonal,
  approveAgent,
  unlockUser,
  // removeCar,
  // editCar,
};