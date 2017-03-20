# A starter React project that includes a web API

This is a starter project that uses webpack to transpile and bundle ES6 React code. This project also includes a web API exposed through Express.js. 


## Steps

To experience this repo in all of its glory:

1. Clone this repo
2. `cd` into it and `npm install`
3. Run `npm start`
4. Navigate to [http://localhost:3000](http://localhost:3000)


## Exercise options

* Add more endpoints routes to `server/routes/widgets.js` and consume them from the client. For example, add a form to add a new widget.

* Add application state to manage what is being shown (the list, details, a form to add new widgets). Additional components should be placed in `client/components`.

* Add more components and write tests for them in `test`. The tests can be run with `npm test`.


## FYI

* The server on port 3000 is configured with CORS to allow the client requests from port 8080. See `server/server.js` for details. This is only needed if you're using the webpack-dev-server (`npm start`).
