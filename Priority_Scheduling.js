const processes = [
  { id: 1, burstTime: 10, priority: 3 },
  { id: 2, burstTime: 1, priority: 1 },
  { id: 3, burstTime: 2, priority: 4 },
  { id: 4, burstTime: 1, priority: 5 },
  { id: 5, burstTime: 5, priority: 2 }
];

processes.sort((a, b) => a.priority - b.priority);

let waitingTime = [];
let turnaroundTime = [];

waitingTime[0] = 0;

for (let i = 1; i < processes.length; i++) {
  waitingTime[i] = 0;
  for (let j = 0; j < i; j++) {
    waitingTime[i] += processes[j].burstTime;
  }
}

for (let i = 0; i < processes.length; i++) {
  turnaroundTime[i] = processes[i].burstTime + waitingTime[i];
}

const avgWaiting =
  waitingTime.reduce((a, b) => a + b, 0) / processes.length;
const avgTurnaround =
  turnaroundTime.reduce((a, b) => a + b, 0) / processes.length;

console.log("Priority Scheduling (Non-Preemptive):");
console.log("Process\tBurst Time\tPriority\tWaiting Time\tTurnaround Time");

for (let i = 0; i < processes.length; i++) {
  console.log(
    `${processes[i].id}\t\t${processes[i].burstTime}\t\t${processes[i].priority}\t\t${waitingTime[i]}\t\t${turnaroundTime[i]}`
  );
}

console.log(`\nAverage Waiting Time: ${avgWaiting.toFixed(2)}`);
console.log(`Average Turnaround Time: ${avgTurnaround.toFixed(2)}`);
