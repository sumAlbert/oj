//read_line() 赛码网
//readline() 牛客网
import { read_line, readline, print } from '../../lib/platform';

export default function () {
  let currentLine;
  while(currentLine = readline()) {
    const n = parseInt(currentLine);
    const a = readline().split(' ');
    a.length = n;
    const average = a.reduce((prev, curr) => (
      parseInt(prev) + parseInt(curr)
    ), 0)/parseInt(n);
    console.log(1111, average);
    if(parseInt(average) !== average) {
      print(-1);
      break;
    }

    const compAveMap = a.map((v) => (parseInt(v) - average));
    console.log(2222, compAveMap);

    let oddNum = 0;
    const blockSize = compAveMap.reduce((prev, curr) => {
      if(curr % 2 != 0) {
        console.log(curr)
        oddNum++;
      }
      if(curr <= 0) {
        return prev;
      }
      if(curr % 2 === 0) {
        return prev + parseInt(curr);
      } else {
        return prev + parseInt(curr) + 1;
      }
    }, 0)
    console.log(3333, blockSize, oddNum);

    if(oddNum % 2 !== 0) {
      print(-1);
    } else {
      print(blockSize / 2);
    }
  }
}
