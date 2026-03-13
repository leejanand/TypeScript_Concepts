const tasks = [
  { name: "Task1", priority: 3 },
  { name: "Task2", priority: 1 },
  { name: "Task3", priority: 2 }
];

tasks.sort((a, b) => a.priority - b.priority);

console.log(tasks);
/********* Output *********
[
  { name: 'Task2', priority: 1 },   
    { name: 'Task3', priority: 2 },
    { name: 'Task1', priority: 3 }
]
*/