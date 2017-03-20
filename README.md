# A starter React project that includes a web API

This is a starter project that uses webpack to transpile and bundle ES6 React code. This project also includes a web API exposed through Express.js. 


## Steps

To experience this repo in all of its glory:

1. Clone this repo
2. `cd` into it and `npm install`
3. Run `npm start`
4. Navigate to [http://localhost:3000](http://localhost:3000)


## Exercise options

* Understand where and how each component is being used
  * make small changes to confirm your hypotheses
  * reset all changes you've made since last commit with `git checkout .`

* Extend the details that are stored in widgets - add a `rating` field to what is dislayed and to the forms.

* Add the ability to destroy / delete a widget

* Add the ability to update a widget

## FYI

* The server on port 3000 is configured with CORS to allow the client requests from port 8080. See `server/server.js` for details. This is only needed if you're using the webpack-dev-server (`npm start`).
