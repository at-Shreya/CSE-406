let pID = ['P1', 'P2', 'P3', 'P4', 'P5'];
let BT = [6, 8, 7, 3, 5];
let AT = [0, 1, 2, 3, 4];
let TQ = 3;


function roundRobin(pID, BT, AT, TQ) {
    let n = pID.length;
    let RT = [...BT];
    let WT = Array(n).fill(0);
    let TAT = Array(n).fill(0);
    let time = 0;
    let done = 0;
    let readyQ = [];
    let runningQ = Array(n).fill(false);


    while (done < n) {
        for (let i = 0; i < n; i++) {
            if (AT[i] <= time && ! runningQ[i]) {
                readyQ.push(i);
                runningQ[i] = true;
            }
        }


        if (readyQ.length === 0) {
            time++;
            continue;
        }


        let i = readyQ.shift();


        if (RT[i] > TQ) {
            time += TQ;
            RT[i] -= TQ;
        } else {
            time += RT[i];
            WT[i] = time - AT[i] - BT[i];
            TAT[i] = time - AT[i];
            RT[i] = 0;
            done++;
        }


   
        for (let j = 0; j < n; j++) {
            if (AT[j] <= time && ! runningQ[j]) {
                readyQ.push(j);
                runningQ[j] = true;
            }
        }


        if (RT[i] > 0) {
            readyQ.push(i);
        }
    }


   
    console.log("PID\tAT\tBT\tWT\tTAT");
    for (let i = 0; i < n; i++) {
        console.log(`${pID[i]}\t${AT[i]}\t${BT[i]}\t${WT[i]}\t${TAT[i]}`);
    }
}



roundRobin(pID, BT, AT, TQ);

