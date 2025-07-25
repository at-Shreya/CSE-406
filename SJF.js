const processes = [
  { pid: "P1", arrival: 0, burst: 5 },
  { pid: "P2", arrival: 1, burst: 3 },
  { pid: "P3", arrival: 2, burst: 1 },
  { pid: "P4", arrival: 3, burst: 2 }
];

processes.sort((a, b) => a.arrival - b.arrival);

let done = [];
let currentTime = 0;
let totalWaiting = 0;
let totalTurnaround = 0;

console.log("PID\tArrival\tBurst\tWaiting\tTurnaround");

while (done.length < processes.length) {
  let available = [];
  for (let i = 0; i < processes.length; i++) {
    if (processes[i].arrival <= currentTime && !done.includes(processes[i])) {
      available.push(processes[i]);
    }
  }

  if (available.length === 0) {
    currentTime++;
    continue;
  }

  let shortest = available[0];
  for (let i = 1; i < available.length; i++) {
    if (available[i].burst < shortest.burst) {
      shortest = available[i];
    }
  }

  shortest.waiting = currentTime - shortest.arrival;
  shortest.turnaround = shortest.waiting + shortest.burst;

  totalWaiting += shortest.waiting;
  totalTurnaround += shortest.turnaround;

  currentTime += shortest.burst;
  done.push(shortest);

  console.log(`${shortest.pid}\t${shortest.arrival}\t${shortest.burst}\t${shortest.waiting}\t${shortest.turnaround}`);
}

const avgWT = totalWaiting / processes.length;

console.log(`\nAverage Waiting Time: ${avgWT.toFixed(2)}`);
