let newUser = {
  email: "email@gmail.com",
  password: "password12345",
};

let jwt = require("jsonwebtoken");
let privateKey = "shhhhh";
let token = jwt.sign(newUser, privateKey);

console.log(token);
