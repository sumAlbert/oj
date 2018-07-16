import question from './question.txt';
import data from './data.txt';
import answer from './answer.js';
import { save, printAll } from '../../lib/platform';

save(data);
answer();
printAll();



