const logger  = require('./logger');

const Task = require('./models/task/Task');


const task = new Task('search');
/*
task.add()
.then((data) => { logger.info(`Added task ${data}`); })
.catch((err) => { logger.error(`${err}`); });
*/

const datastore = require('./models/datastore');

const query = datastore.createQuery('Task')

datastore.runQuery(query)
  .then(async (data) =>  {
    await console.log('Result : '); 
    await data.forEach((rowTask) => { 
        console.log('Task: '+task.name+' : '+task.created); 
    });
  })
  .catch((err) => {
    logger.error(err);
  });
