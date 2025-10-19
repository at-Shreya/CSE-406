const requests = [82, 170, 43, 140, 24, 16, 190];
const head = 50;

let totalSeek = 0;
let current = head;
let sequence = [];

console.log(`Initial Head Position: ${head}`);
console.log(`Request Sequence: ${requests.join(", ")}`);
console.log("\nSeek Sequence:");

for (let i = 0; i < requests.length; i++) {
  let distance = Math.abs(current - requests[i]);
  totalSeek += distance;
  console.log(`Move from ${current} to ${requests[i]} => Seek: ${distance}`);
  current = requests[i];
  sequence.push(current);
}

const averageSeek = totalSeek / requests.length;

console.log("\nSeek Sequence Order:", sequence.join(" → "));
console.log(`\nTotal Seek Time: ${totalSeek}`);
console.log(`Average Seek Time: ${averageSeek.toFixed(2)}`);
