const Task = require('./models/task/Task');


const task = new Task('search');

task.add()
.catch((err) => { console.log('Error adding task : ', err);});
