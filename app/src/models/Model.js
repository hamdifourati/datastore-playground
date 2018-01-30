const datastore = require('./datastore');

class Model {
  constructor(kind) {
    this.datastore = datastore;
    this.kind = kind;
    this.key = this.datastore.key(this.kind);
  }
}


module.exports = Model;
