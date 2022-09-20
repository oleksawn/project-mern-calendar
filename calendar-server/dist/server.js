"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _mongodb = require("mongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _express.default)(); // create a server

_mongodb.MongoClient.connect('mongodb+srv://oleksa:7KeY$P-WSbTJ@cluster0.1yonhy3.mongodb.net/?retryWrites=true&w=majority').then(client => {
  console.log('connected to DB');
  const calendarDB = client.db('calendar');
  const tasksCollection = calendarDB.collection('tasks');
  server.use(_express.default.json());
  server.use((0, _cors.default)());
  server.get('/tasks', (req, res) => {
    tasksCollection.find().toArray().then(results => {
      res.json(results);
    }).catch(err => res.json(err));
  });
  server.post('/tasks', (req, res) => {
    tasksCollection.insertOne(req.body).then(results => {
      res.json(results);
    }).catch(err => res.json(err));
  }); // server.put('/tasks', (req, res) => {
  //   tasksCollection
  //     .findOneAndUpdate(
  //       { title: 'React Hooks POST Request Example' },
  //       {
  //         $set: {
  //           title: req.body.title
  //         }
  //       },
  //       {upsert: true}
  //     )
  //     .then((result) => {
  //       console.log(result);
  //       res.json({ title: 'data was updated' });
  //     })
  //     .catch((err) => console.error(err));
  // });
  // server.delete('/tasks', (req, res) => {
  //   res.json({ title: 'data was deleted' });
  // });
  // const port = process.env.PORT || 5000;

  server.listen(8080, () => {
    // browsers can connect to this server 'app'
    console.log(`listening on port: ${8080}`);
  });
}).catch(err => console.error(err));

var _default = server;
exports.default = _default;