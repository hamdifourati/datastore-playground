const datastore = require('../datastore');
const Model = require('../Model');

class Task extends Model {
  constructor(name=null, description=null) {
    super('Task');
    this.name = name;
    this.description = description;
  } 

  async add() {
    // validate data
    if (! this.name) {
       throw Error('Missing "name" field ');
    }
    
   const entity = {
    key: this.key,
    data: [
      {
        name: 'name',
        value: this.name
      },
      {
        name: 'created',
        value: new Date().toJSON(),
      },
      {
        name: 'description',
        value: this.description,
        excludeFromIndexes: true
      }
    ]
   };
  await this.datastore.save(entity)
  console.log(`Added Task: ${this.name}`);
  }
}


module.exports = Task;
