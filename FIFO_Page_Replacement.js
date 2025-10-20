const pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2]; 
const frameSize = 3; 

let frames = [];
let pageFaults = 0;
let index = 0;

console.log(`Page Reference String: ${pages.join(", ")}`);
console.log(`Frame Size: ${frameSize}\n`);

for (let i = 0; i < pages.length; i++) {
  const page = pages[i];

  if (!frames.includes(page)) {
    if (frames.length < frameSize) {
      frames.push(page);
    } else {
      frames[index] = page; 
      index = (index + 1) % frameSize; 
    }
    pageFaults++;
    console.log(`Page ${page} caused a page fault -> Frames: [${frames.join(", ")}]`);
  } else {
    console.log(`Page ${page} already in frames -> No page fault`);
  }
}

console.log(`\nTotal Page Faults: ${pageFaults}`);
console.log(`Page Fault Rate: ${(pageFaults / pages.length * 100).toFixed(2)}%`);
