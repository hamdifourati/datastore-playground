const logger  = require('./logger');

const Task = require('./models/task/Task');


const task = new Task('search');

task.add()
.then((data) => { logger.info(`Added task ${data}`); })
.catch((err) => { logger.error(`${err}`); });
