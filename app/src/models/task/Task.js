import datastore from '../datastore';
import Model from '../Model';

class Task extends Model {
  constructor(name=null, description=null) {
    super('Task');
    this.name = name;
    this.description = description;
  } 

  add() {
   const entity = {
    key: this.key,
    data: [
      {
        name: 'name',
        value: this.name || throw Error('Missing "name" field ')
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
   } ;
  }
}
