const requests = [82, 170, 43, 140, 24, 16, 190];
const head = 50;

let totalSeek = 0;
let current = head;
let sequence = [];
let pending = [...requests];

console.log(`Initial Head Position: ${head}`);
console.log(`Request Sequence: ${requests.join(", ")}`);
console.log("\nSeek Sequence:");

while (pending.length > 0) {
  let minDistance = Infinity;
  let closestIndex = -1;

  for (let i = 0; i < pending.length; i++) {
    const distance = Math.abs(current - pending[i]);
    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = i;
    }
  }

  const nextRequest = pending[closestIndex];
  console.log(`Move from ${current} to ${nextRequest} => Seek: ${minDistance}`);

  totalSeek += minDistance;
  current = nextRequest;
  sequence.push(current);

  pending.splice(closestIndex, 1);
}

const averageSeek = totalSeek / requests.length;

console.log("\nSeek Sequence Order:", sequence.join(" → "));
console.log(`\nTotal Seek Time: ${totalSeek}`);
console.log(`Average Seek Time: ${averageSeek.toFixed(2)}`);
