let dataMap = [];
let currentLine = 0;
let currentPoi = 0;
let outputMap = [];
const MAXNUM = 1024;


export const save = (data) => {
  dataMap = data.split('\n');
  currentLine = 0;
};

export const readline = () => dataMap[currentLine++];// 牛客网

export const read_line = () => {//赛码网
  let currentInput = dataMap[currentLine];
  let backLine = (currentInput || '').substr(currentPoi, MAXNUM);
  if ((currentInput || '').length >= currentPoi + MAXNUM) {
    currentPoi += MAXNUM;
  } else {
    currentPoi = 0;
    currentLine++;
  }
  return backLine;
};

export const print = (data) => {outputMap.push(data)};

export const printAll = () => {
  outputMap.forEach(v => console.log(`print: ${v}`));
};
