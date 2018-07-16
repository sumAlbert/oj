import { read_line, readline, print } from '../../lib/platform';

export default function () {
  var test;
  while(test = read_line()) {
    print(test);
  }
}