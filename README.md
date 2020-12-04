# Cat Cafe Exercise - Course Final Open Lab

For this exercise we will go through the following:

- creating an ID with UUID
- creating an errorHandler middleware
- creating a JWT token
- hashing password with Bcrypt
- Transferring an array to a JSON object using fs
- using .env to hide our API keys/private data
- using .gitignore to hide our node modules

## To do before lab

1. `git clone` this repo
2. ``npm install` packaages
3. There are 3 routes in `router.js` - make sure they are working in Postman

## Creating an ID with UUID

1. Open https://www.npmjs.com/package/uuid - I simply googled 'npm package uuid'
2. Follow instructions - hint it's step 2

## Creating an errorHandler middleware

#### Goal: create a catch all route, so if someone is on your website and types the wrong URL, they will get an error message

1. create a catch all route to that sends a message `{ message: "not found" }` - you can test this in `scratchpadErrorHandler.js`

Now let's move it to a middleware so whenever we call `next()`, it calls the middleware!

2. Open https://expressjs.com/en/guide/error-handling.html#the-default-error-handler - Affaf added this link in the final project
3. Add code to /middleware/errorHandler.js
4. edit status to `404` and message `{ message: "not found" }`
5. connect it to index.js
6. change catch all route to direct to middleware with `next()`

## Creating a JWT token

#### Goal: create a JWT token, so if someone registers an account, they are taken to the main cats page. If they don't register, then they can't access the page. No token = no access.

1. Open https://www.npmjs.com/package/jsonwebtoken - I simply googled 'npm package jasonwebtoken'
2. Follow instructions to change the `POST /register` route so when a user registers an account, they are assigned a session token - hint 'Synchronous Sign with default (HMAC SHA256)' - you can test this in `scratchpadJWT.js`

Now let's move it to a middleware so whenever we call `verifyToken`, it calls the middleware! See Affaf's example here: https://gitlab.com/yorku-full-stack-program/cohort/fall-2020/fs1020/storage-authentication-lab

3. Move your JWT code to `/middleware/jwtVerify.js` and call `verifyToken` in your `GET /cats` route

## Hashing password with Bcrypt

#### Goal: when a user registers, hash their password so their actual password isn't saved in the database for extra security measure.

1. Open https://www.npmjs.com/package/bcrypt
2. Follow instructions to hash the password in the `POST /register` route - hint technique 2 - you can test this in `scratchpadBcrypt.js`

## Transferring an array to a JSON object using fs

#### Goal: in order to save the history in our database, we need to use file system middleware. Now when we add a cat, the new cat should save in a json file

1. Transfer `cats.js` to `cats.json`
2. Add your fs middleware in `/util/jsonHandler.js`
   Affaf's lab has a detailed file for fs middleware - in our case, we will be using a simpler version: https://gitlab.com/yorku-full-stack-program/cohort/fall-2020/fs1020/todo-lab-with-storage/-/blob/master/src/db.js

## Using .env to hide our API keys/private data

1. change .envExample into .env
2. Hide the following: PORT, Bcrypt secret words, database route

## Using .gitignore to hide things we don't want on GitLab/GitHub

1. Hide the following: node_modules, database, .env file
# cat-cafe-course-final-lab
