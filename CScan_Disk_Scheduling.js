const requests = [82, 170, 43, 140, 24, 16, 190];
const head = 50;
const diskSize = 200; 
const direction = "right"; 

let totalSeek = 0;
let sequence = [];

console.log(`Initial Head Position: ${head}`);
console.log(`Request Sequence: ${requests.join(", ")}`);
console.log(`Direction: ${direction.toUpperCase()}\n`);

let left = [];
let right = [];

for (let i = 0; i < requests.length; i++) {
  if (requests[i] < head) left.push(requests[i]);
  else right.push(requests[i]);
}

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

let current = head;

if (direction === "right") {
  for (let i = 0; i < right.length; i++) {
    let distance = Math.abs(current - right[i]);
    totalSeek += distance;
    console.log(`Move from ${current} to ${right[i]} => Seek: ${distance}`);
    current = right[i];
    sequence.push(current);
  }

  if (left.length > 0) {
    let distanceToStart = Math.abs(current - 0);
    totalSeek += distanceToStart;
    console.log(`Jump from ${current} to 0 (circular) => Seek: ${distanceToStart}`);
    current = 0;
  }

  for (let i = 0; i < left.length; i++) {
    let distance = Math.abs(current - left[i]);
    totalSeek += distance;
    console.log(`Move from ${current} to ${left[i]} => Seek: ${distance}`);
    current = left[i];
    sequence.push(current);
  }
} else {
  left.reverse();
  for (let i = 0; i < left.length; i++) {
    let distance = Math.abs(current - left[i]);
    totalSeek += distance;
    console.log(`Move from ${current} to ${left[i]} => Seek: ${distance}`);
    current = left[i];
    sequence.push(current);
  }

  if (right.length > 0) {
    let distanceToEnd = Math.abs(current - (diskSize - 1));
    totalSeek += distanceToEnd;
    console.log(`Jump from ${current} to ${diskSize - 1} (circular) => Seek: ${distanceToEnd}`);
    current = diskSize - 1;
  }

  right.reverse();
  for (let i = 0; i < right.length; i++) {
    let distance = Math.abs(current - right[i]);
    totalSeek += distance;
    console.log(`Move from ${current} to ${right[i]} => Seek: ${distance}`);
    current = right[i];
    sequence.push(current);
  }
}

const averageSeek = totalSeek / requests.length;

console.log("\nSeek Sequence Order:", sequence.join(" → "));
console.log(`\nTotal Seek Time: ${totalSeek}`);
console.log(`Average Seek Time: ${averageSeek.toFixed(2)}`);
