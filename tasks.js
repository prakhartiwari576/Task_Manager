const fs = require('fs');

var fetchtasks = () => {
  try {
    var taskString = fs.readFileSync('tasks-data.json');
    return JSON.parse(taskString);
  } catch (e) {
    return [];
  }
}

var saveTasks = (tasks) =>{
  fs.writeFileSync('tasks-data.json',JSON.stringify(tasks));
}

var addTask = (time,task) => {
  var tasks = fetchtasks();
  var task = {
    time,
    task
  };
var duplicateTasks = tasks.filter((task) => task.time === time);

if(duplicateTasks.length === 0){
 tasks.push(task);
 saveTasks(tasks);
 return task;
 }
};

var getAll = () => {
  return fetchtasks();
};

var removeTask = (time) => {
 var tasks = fetchtasks();
 var filteredTasks = tasks.filter((task) => task.time!==time);
 saveTasks(filteredTasks);
 return tasks.length !== filteredTasks.length;
};

var readTask = (time) => {
  var tasks = fetchtasks();
  var filteredTasks = tasks.filter((task) => task.time === time);
  return filteredTasks[0];
};

var logTask = (task) => {
  console.log('--------');
  console.log(`Time: ${task.time}`);
  console.log(`Task: ${task.task}`);
};
module.exports = {
  addTask,
  logTask,
  getAll,
  removeTask,
  readTask
};
