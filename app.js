const fs = require('fs');
const yargs = require('yargs');
const tasks = require('./tasks.js');

const argv = yargs.argv;
var command  = argv._[0];

if(command === 'add'){
  var task = tasks.addTask(argv.time,argv.task);
  if(task === undefined){
    console.log('Task already exists');
  }
  else{
    console.log('new task added');
    tasks.logTask(task);
  }
}
else if(command === 'remove'){
  var taskRemoved = tasks.removeTask(argv.time);
  var message = taskRemoved ? 'Task was Removed' : 'Task not found';
  console.log(message);
}
else if(command === 'list'){
  var allTasks = tasks.getAll();
  console.log(`Printing ${allTasks.length} task(s).`);
  allTasks.forEach((task) => tasks.logTask(task));
}
else if(command === 'read'){
  var task = tasks.readTask();
  if(task === undefined){
    console.log('Task not found');
  }
  else{
    tasks.logTask(task);
  }
}
else{
  console.log('Invalid Command');
}
