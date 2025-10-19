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

if (direction === "left") left.push(0);
else if (direction === "right") right.push(diskSize - 1);

for (let i = 0; i < requests.length; i++) {
  if (requests[i] < head) left.push(requests[i]);
  else if (requests[i] > head) right.push(requests[i]);
}

left.sort((a, b) => b - a);
right.sort((a, b) => a - b);

let runOrder =
  direction === "left" ? left.concat(right) : right.concat(left);

let current = head;

for (let i = 0; i < runOrder.length; i++) {
  let distance = Math.abs(current - runOrder[i]);
  totalSeek += distance;
  console.log(`Move from ${current} to ${runOrder[i]} => Seek: ${distance}`);
  current = runOrder[i];
  sequence.push(current);
}

const averageSeek = totalSeek / requests.length;

console.log("\nSeek Sequence Order:", sequence.join(" → "));
console.log(`\nTotal Seek Time: ${totalSeek}`);
console.log(`Average Seek Time: ${averageSeek.toFixed(2)}`);
