"use strict";

import express from "express";
import router from "./src/router";

const app = express();

// allows us to parse json
app.use(express.json());

//using the router.js file
app.use(router);

app.listen(3000, () =>
  console.log(`API server ready on http://localhost:3000`)
);
