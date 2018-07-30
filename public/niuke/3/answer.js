//read_line() 赛码网
//readline() 牛客网
import { read_line, readline, print } from '../../lib/platform';

export default function () {

  const recursiveC = (n, m) => {
    let result = [];
    if(n <= 0 || m <= 0) {
      result.push([]);
      return result;
    }
    if(n === m) {
      result.push([...Array(parseInt(n)).keys()]);
    } else if(n > m) {
      result = result.concat(recursiveC(n-1, m));
      result = result.concat(recursiveC(n-1, m-1).map((v) => {
        v.push(m)
        return v;
      }));
    }
    return result;
  }

  const dpC = (n, m) => {
    let result = [];
    [...Array(parseInt(n+1)).keys()].forEach((i) => {
      result[i] = [];
      [...Array(parseInt(m+1)).keys()].forEach((j) => {
        if(j > i) {
          result[i][j] = [];
          return;
        }
        result[i][j] = (!i || !j) ? [[]] : result[i-1][j-1].map((v) => (
          v.concat([i])
        )).concat(result[i-1][j]);
      })
    })
    return result[n][m];
  }

  //读取
  let currentLine;
  while(currentLine = readline()) {
    let matrix = [];
    let [n, m] = currentLine.split(' ');
    [...Array(parseInt(n)).keys()].forEach(() => {
      matrix.push(readline().split(''));
    })

    // 求和二分
    let sum = matrix.toString().split(',').reduce((prevV, currV) => (parseInt(prevV) + parseInt(currV)), 0);
    let maxTarget = parseInt(sum / 16);
    console.time('recursiveC 250 3');
    console.log(recursiveC(100, 3));
    console.timeEnd('recursiveC 250 3');
    console.time('dp 250 3');
    console.log(dpC(100, 3))
    console.timeEnd('dp 250 3');
  }
}