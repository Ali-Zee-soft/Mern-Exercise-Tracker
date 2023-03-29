const router = require('express').Router();
const bcrypt = require("bcrypt");
let Userslogin = require('../models/email');
const jwt = require("jsonwebtoken");
const auth = require("./auth");

// Curb Cores Error by adding a header here
router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

router.route('/').get((req, res) => {
  Userslogin.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
});
// register endpoint
router.route('/register').post((req, res) => {
    // hash the password
    bcrypt
      .hash(req.body.password, 10)
      .then((hashedPassword) => {
        // create a new user instance and collect the data
        const userslogin = new Userslogin({
          email: req.body.email,
          password: hashedPassword,
        });
  
        // save the new user
        userslogin.save()
          // return success if the new user is added to the database successfully
          .then((result) => {
            res.status(201).send({
              message: "User Created Successfully",
              result,
            });
          })
          // catch error if the new user wasn't added successfully to the database
          .catch((error) => {
             res.status(500).send({
               message: "Error creating user",
               error,
             });
          });
        })
      // catch error if the password hash isn't successful
      .catch((e) => {
        res.status(500).send({
          message: "Password was not hashed successfully",
          e,
        });
      });
  });
  // login endpoint

router.route('/login').post((request, response) => {
  // check if email exists
  Userslogin.findOne({ email: request.body.email })

    // if email exists
    .then((Userslogin) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, Userslogin.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: Userslogin._id,
              userEmail: Userslogin.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: Userslogin.email,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

// free endpoint
router.route('/free').get((request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

router.route('/auth').get(auth, (request, response) => {
  response.json({ message: "You are authorized to access me" });
});





module.exports = router;