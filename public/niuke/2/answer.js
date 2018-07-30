//read_line() 赛码网
//readline() 牛客网
import { read_line, readline, print } from '../../lib/platform';

export default function () {
  //读取
  let currentline, menu = {};
  while(currentline = readline()) {
    currentline.split(' ').reduce((pre, cur) => object.assign(pre, {[cur]: 1}), menu);
  }
  print(object.keys(menu).length);
}