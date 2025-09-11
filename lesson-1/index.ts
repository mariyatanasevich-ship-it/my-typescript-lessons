const one:number = 1;
let two:number = one + 1;
let hello:string = 'Hello';
let world:string = ' world';
let helloWorld:string = hello + world;
let hW123:string = `${helloWorld} ${one} ${two}`;
// two= two+1; = two++;
two++;
// hW123 = hw123 + two == hW123 +=  two;

hW123 = `${hW123} ${two}`;
console.log(hW123)
let Sample:(string | number)[] = [hello,one];
// [hello,one] = [0:hello,1:one]
console.log(Sample[0])
console.log(helloWorld);
let isTrue:boolean = true;
