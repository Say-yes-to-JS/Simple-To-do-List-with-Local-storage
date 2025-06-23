import{ TaskList, Task } from './ToDoList.js';

const myTaskList = new TaskList(); 
var todoAppInstruction = `\t Hello! and Welcome to the Todo Application by SAY-YES-TO-JS
                          \t press 1 to print instruction
                          \t Press 2 to create a new todo
                          \t press 3 to to see a specicific todo
                          \t press 4 to see all your current Todos
                          \t press 5 to delete a todo
                          \t press 6 to update a todo details 
                          \t press 0 to quite the Todo App \n\n     
                      `
console.log(todoAppInstruction)

let option = Math.round(Math.random()*2);
console.log(option)

while(option != 0){
    switch(option){
        case 1:
            console.log("Testing")
            option = 0;
            break;
        case 2: 
            const name = "Enter the name of your task"
            let description = "This is the description of your task below"
            let hours = Math.round(Math.random()*10);
            let startTIme = new Date();
            let endTIme  = startTIme;
            endTIme.setHours(hours+endTIme.getHours);
            let newTodo = new Task(name, description, startTIme, endTIme);
            console.log(myTaskList.addTodo(newTodo));
            option = 0;
            break;
        case 3: 
        consolelog("#")
            option = 0;
            break;
        case 4: 
            break;
        case 5: 
            break;
        case 0:
            break;
        default:
            console.log(todoAppInstruction);
            break;
    }
}

