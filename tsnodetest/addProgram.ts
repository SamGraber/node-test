import * as readline from 'readline';
import { drop } from 'lodash';
import { add } from './adder';

const i = readline.createInterface(process.stdin, process.stdout, undefined);
i.question('Please enter a number: ', function(answer) {
	console.log('You entered:', answer);

	i.close();
});

// let [x, y]: number[] = getArgs().map(x => +x);

// console.log(add(x, y));

function getArgs(): any[] {
	return drop(process.argv, 2);
}
