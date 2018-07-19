import { read_line, readline, print } from '../../lib/platform';

export default function () {
  let currentLine, n, m, i, startX, startY,
  placeMatrix = [], stepKind, stepMap = [];
  //读取数据
  while(currentLine = readline()) {
    [n, m] = currentLine.split(' ');
    n = parseInt(n, 10);
    m = parseInt(m, 10);
    for(i = 0; i < n; i++) {
      placeMatrix.push(readline().split(''));
    }
    [startX, startY] = readline().split(' ');
    stepKind = parseInt(readline(), 10);
    for(i = 0; i < stepKind; i ++) {
      stepMap.push(readline().split(' '));
    }

    // 初始化数据
    let queueBFS = [], tempSaveBFS = [], numMatrix = [], step = 0;
    numMatrix = placeMatrix.map(line => line.map(row => row === '.'? Infinity:-1));
    numMatrix[startX][startY] = 0;
    queueBFS.push([startX, startY, 0]);

    // 开始
    while(queueBFS.length) {
      let [currentX, currentY, step] = queueBFS.shift();
      stepMap.forEach(([currentStepX, currentStepY]) => {
        let nextX = parseInt(currentX) + parseInt(currentStepX);
        let nextY = parseInt(currentY) + parseInt(currentStepY);
        if (nextX < n && nextX >= 0 && nextY < m && nextY >= 0 && numMatrix[nextX][nextY] === Infinity) {
          numMatrix[nextX][nextY] = step + 1;
          queueBFS.push([nextX, nextY, step + 1]);
        }
      })
    }
    
    let result = numMatrix.toString().split(',').reduce((previous, current) => {
      let currentValue = parseInt(current, 10);
      currentValue = isNaN(currentValue)? Infinity: currentValue;
      return Math.max(previous, currentValue)
    }, 0);
    result = isFinite(result)? result: -1;
    print(result);
  }
}