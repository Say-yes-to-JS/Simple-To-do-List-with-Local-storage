# Simple-To-do-List-with-Local-storage
---

Great choice! Starting with **vanilla JavaScript** (JavaScript without frameworks) is an excellent way to build a solid foundation.

### 🎯 **Suggested Project: "Simple To-Do List with Local Storage"**

This is a **classic beginner project** that covers essential JavaScript concepts while also mimicking a real-world use case.

---

## 🚧 **Project Overview**

A basic To-Do List app where users can:

* Add tasks
* Mark tasks as complete
* Delete tasks
* Persist data using browser's localStorage

---

## 🧰 **Tools, Libraries & Features**

You will use **only vanilla JavaScript**, but you’ll practice using:

* `DOM Manipulation`
* `Events` (like clicks, input, etc.)
* `localStorage`
* `Array & Object methods`
* `Date` class (if you want to add timestamps)
* `JSON` methods (for localStorage)
* Some **CSS** and **HTML** for UI (can be minimal)

---

## 🧱 **Core JavaScript Concepts & Classes You’ll Practice**

| Feature                    | JS Concept / Class | Method Examples                                    |
| -------------------------- | ------------------ | -------------------------------------------------- |
| Adding Tasks               | DOM & Events       | `addEventListener`, `createElement`, `appendChild` |
| Listing Tasks              | Arrays             | `forEach`, `map`                                   |
| Completing Tasks           | DOM & CSS Classes  | `classList.add`, `classList.toggle`                |
| Deleting Tasks             | DOM Tree Traversal | `parentNode.removeChild()`                         |
| Storing Tasks              | Web Storage API    | `localStorage.setItem`, `getItem`, `removeItem`    |
| Formatting Time (optional) | `Date` class       | `new Date().toLocaleString()`                      |
| Saving Complex Data        | JSON               | `JSON.stringify`, `JSON.parse`                     |

---

## 🧭 **Step-by-Step Plan**

### 1. **Setup the Basic HTML & CSS**

Just a basic layout:

```html
<div id="app">
  <h1>My To-Do List</h1>
  <input type="text" id="taskInput" placeholder="New task..." />
  <button id="addTaskBtn">Add Task</button>
  <ul id="taskList"></ul>
</div>
```

Style it lightly with CSS.

---

### 2. **Add JavaScript Structure**

* Use a `TaskManager` class (optional but good practice)
* Have an array to hold tasks in memory

```js
class TaskManager {
  }

  addTask(taskText) {
  }

  deleteTask(id) {
  }

  toggleTask(id) {
  }

  saveTasks() {
  }

  getTasks() {
  }
}
```

---

### 3. **DOM Interaction**

* Bind the `addTask` function to the "Add Task" button.
* Dynamically render the list of tasks into `<ul>` with checkboxes and delete buttons.
* Add event listeners to handle complete and delete actions.

---

### 4. **Persist Data with `localStorage`**

Every time a task is added, toggled, or deleted, update the `localStorage`.

---

### 5. **(Optional) Enhancements**

* Add date and time to each task using `new Date()`
* Filter tasks: All / Completed / Pending
* Keyboard input (Enter key to submit)

---

## 🧠 Why This Project Works

It helps you practice:

* Data structures (arrays, objects)
* Core OOP concepts (class and method)
* Event-driven programming
* DOM API mastery
* Using browser APIs like `localStorage`

---

## ✅ Output Example

![todo-app-demo](https://user-images.githubusercontent.com/70802995/115963951-b9e39300-a51c-11eb-9522-f8c19d5cb0a1.gif)

---
