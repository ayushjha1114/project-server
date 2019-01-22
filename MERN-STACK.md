## Introduction
---
* The **MERN** stack consists of MongoDB, Express, React, and Node.js.
* **MongoDB** as a **NoSQL** database
  - An open source document database that provides persistence for application data.
  - Stores data as **JSON** documents in collections with dynamic schemas.
* **Express web framework** of Node.js provides routing and middleware
  - Basically runs the backend code as a module within the Node.js environment.
  - Handles the routing of requests to the right parts of your app.
* **React.js** provides a dynamic frontend
  - A JavaScript library developed by **Facebook** to build interactive / reactive interfaces.
* **Node.js** on the server
  - A javascript runtime environment.
  - An **asynchronous** event-driven engine - which means the app makes a request for some data and then performs other tasks while waiting for a response.

### Express.js
---
* Express.js is a *web framework* for Node.js. It is a fast, robust and asynchronous in nature.
* It can be used to design single-page, multi-page(SPA) and hybrid web applications.
* It allows to setup *middlewares* to respond to HTTP Requests.
* It defines a *routing table* which is used to perform different actions based on HTTP method and URL.
* It allows to dynamically render HTML Pages based on passing arguments to templates.
* **Node Package Manager(npm)**
  - ` npm install -g <package-name> `
    - Here -g flag is used to install package globally.
  - To install express.js
  - ` npm install --save express `
    - The --save flag can be replaced by the -S flag. This flag ensures that Express is added as a dependency to our **package.json** file.
  - ` npm install -g nodemon`
    - This tool restarts our server as soon as we make a change in any of our files, otherwise we need to restart the server manually after each file modification.
* To start developing app using express.js, Firstly create a file named as index.js
  - ```
    var exp = require('express');
    var app = exp();
    app.get('/', function(req, res){
    res.send("Hi There!");
    });
    app.listen(3000);
    ```
  - To import the express.js package in our app is done by require('express).
  - app.get(route, callback)
    - This function tells what to do when a get request at the given route is called.
  - res.send()
    - This function takes an object as input and it sends this to the requesting client.
  - app.listen(port, [host], [backlog], [callback]])
    - This function binds and listens for connections on the specified host and port. **Port** is the only required parameter here.
  - To run the file, go to the terminal and type
    - ` nodemon index.js `
    - This will start the server. To test this app, open your browser and go to **http://localhost:3000** and a message will be displayed.
  - ```
    var express = require('express');
    var app = express();
    app.get('/hello', function(req, res){
    res.send("Hello World!");
    });
    app.listen(3000);
    ```
  - If we run our application and go to **localhost:3000/hello**, the server receives a get request at route **"/hello"**, our Express app executes the callback function attached to this route and sends "Hello World!" as the response.

* Routers
  - Defining routes like above is very tedious to maintain. To separate the routes from our main *index.js* file, we will use **Express.Router**. And create new file named ra.js
  - ```
    var express = require('express');
    var router = express.Router();
    router.get('/', function(req, res){
    res.send('GET route on things.');
    });
    router.post('/', function(req, res){
    res.send('POST route on things.');
    });
    //export this router to use in our index.js
    module.exports = router;
    ```
  - Now to use this router in our **index.js**, type in the following before the app.listen function call.
  - ```
    var exp = require('Express');
    var app = exp();
    var things = require('./ra.js');
    //both index.js and ra.js should be in same directory
    app.use('/ra', things);
    app.listen(3000);
    ```
  - The app.use function call on route **'/ra'** attaches the **things** router with this route.

### Node.js
---
* Node.js is an open source server environment.
* Node.js allows you to run JavaScript on the server.
* Here is how Node.js handles a file request:
  - Sends the task to the computer's file system.
  - Ready to handle the next request.
  - When the file system has opened and read the file, the server returns the content to the client.
* Node.js uses **asynchronous programming**
  - Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress.

### MongoDB
---
* MongoDB is an open-source document database and leading NoSQL database.
* MongoDB works on concept of collection and document.
* Database is a physical container for collections.
* Collection is a group of MongoDB documents. It is the equivalent of an RDBMS table.
* A document is a set of key-value pairs. Documents have dynamic schema.

### React
---
* React is a JavaScript library created by **Facebook**.
* React is a User Interface (UI) library.
* React is a tool for building UI components.
* It uses virtual DOM which is a JavaScript object.
* This will improve apps performance, since JavaScript virtual DOM is faster than the regular DOM.
* Component and data patterns improve readability, which helps to maintain larger apps.

