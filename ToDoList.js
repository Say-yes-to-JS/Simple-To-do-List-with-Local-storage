class TaskList{
    tasks;
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    
    addTodo(task){
        let index = task.getId();
        if(index != null){
            this.tasks[index] = task
            return task.name+" added"
        }
        return "Task wasnt created";
        
    }
   
    deleteTask(id) {
        if(this.tasks[id]!=null){
            this.tasks.slice(id, 1);
            return "Task "+id+ " deleted."
        }
        return "Task "+id+" doesnt exist";
    }

    toggleTask(id) {
        if(this.tasks[id]!=null){
            return this.tasks[id].getName();
        }
        return "Task doesnt exist."
    }

    getAllTasks(){
        let result = "";
        for(const task of this.tasks){
            if(task instanceof Task){
                let taskName = task.getName();
                let taskId = task.getId();
                result = result.concat(`ID: ${taskId} /// Name: ${taskName} \n`);
            }
        }
        return result;
    }
}

class Task{
    #id;
    constructor(name, description, startTIme, finishTime){
        this.id = (Math.floor((Math.random()*1000)+1));
        this.name = name;
        this.description=description;
        this.startTIme = startTIme;
        this.finishTime = finishTime;

    }

    getId(){
        return this.id;
    }
    getTime(){
        return this.endTime-this.startTIme;
    }

    getDescription(){
        return this.description;
    }

    getName(){
        return this.name;
    }
}

export{TaskList, Task}