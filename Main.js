import{ TaskList, Task } from './ToDoList.js';

const myList = new TaskList(); 
let startDate = new Date(2025, 6, 18, 3, 0);
let endDate = new Date(2025, 6, 5, 0);

var task1 = new Task("Tahajjud", "Wake up at 3am in the night for tahajjuud", startDate, endDate);
var task2 = new Task("Subhi", "After Tahajjud, go to the mosque for Subhu", startDate, endDate);

console.log(myList.addTodo(task2));
console.log(myList.addTodo(task1));
console.log(myList.getAllTasks());


console.log(myList.deleteTask(127));
console.log(myList.getAllTasks());