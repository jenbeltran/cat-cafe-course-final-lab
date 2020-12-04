"use strict";

import express from "express";
import cats from "../data/cats";
import users from "../data/users";

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});

router.get("/cats", (req, res) => {
  return res.status(200).send(cats);
});

router.post("/cats", (req, res) => {
  let newCat = {
    id: 4,
    name: req.body.name,
    breed: req.body.breed,
  };
  cats.push(newCat);
  return res.status(201).send(cats);
});

router.post("/register", (req, res) => {
  let newUser = {
    email: req.body.email,
    password: req.body.password,
  };
  users.push(newUser);
  return res.status(201).send(users);
});

export default router;
