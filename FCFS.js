const processes = [
  { pid: "P1", arrival: 0, burst: 5 },
  { pid: "P2", arrival: 1, burst: 3 },
  { pid: "P3", arrival: 2, burst: 8 },
  { pid: "P4", arrival: 3, burst: 6 },
  { pid: "P5", arrival: 4, burst: 9 }
];


processes.sort((a, b) => a.arrival - b.arrival);

let currentTime = 0;
let totalWaitingTime = 0;
let totalTurnaroundTime = 0;

console.log("PID\tArrival\tBurst\tWaiting\tTurnaround");

processes.forEach(p => {
  if (currentTime < p.arrival) {
    currentTime = p.arrival;
  }

  p.waiting = currentTime - p.arrival;
  p.turnaround = p.waiting + p.burst;

  currentTime += p.burst;
  totalWaitingTime += p.waiting;
  totalTurnaroundTime += p.turnaround;

  console.log(`${p.pid}\t${p.arrival}\t${p.burst}\t${p.waiting}\t${p.turnaround}`);
});

const avgWT = totalWaitingTime / processes.length;

console.log(`\nAverage Waiting Time: ${avgWT.toFixed(2)}`);
