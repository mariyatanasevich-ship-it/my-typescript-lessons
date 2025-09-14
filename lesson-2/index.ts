let wWw:string = 'Hallo world';
let aaa:string = wWw;
// for(let i:number = 1; i <= 3; i++){
//     wWw += ` ${i}`;
// }
// console.log(wWw)
const arr:number[] = [1,2,3,4,5,6];
// for(let j:number = 2; j < arr.length - 1; j++){
//     aaa += ` ${arr[j]}`;
// }
for(let h:number = arr.length - 1; h>=0; h--){
    aaa += ` ${arr[h]}`
}
function countDownFirst() {
    for(let j:number = 2; j < arr.length - 1; j++){
        aaa += ` ${arr[j]}`;
    }
}
function countDown(str:string, Arr:number[]) {
    for(let j:number = 2; j < Arr.length - 1; j++){
        str += ` ${Arr[j]}`;
    }
    return str;
}
// Створити функцію яка буде виводити на екран всі елементи масива від початку до кінця і навпаки

function apDo(Arr:any[]){
    for(let i:number = 0; i < Arr.length - 1;  i++){
         console.log (` ${arr[i]}`)
    }
    for( let j:number = Arr.length - 1; j>=0; j--){
        console.log (arr[j])
    }
}

console.log(countDown(aaa, arr))
 
// Створити функцію яка приймає 2 масиви виводить і в резуьтаті повертає двомірний масив

let col1:number[] = [1, 2, 3];
let row1:number[] = [1, 2];

let cols:number = 3;
let rows:number = 2;

let table:number[][] = [];

for(let row:number = 0; row < rows;  row++){
    let rowTable:number[] = [];
    for(let col:number = 0; col < cols;  col++){
        rowTable[col] = col + 1;
    }
    table[row] = rowTable;
}
console.log (table);

let apDoo:number[] = [];
for(let i:number = 0; i<10000; i++){
    apDoo[i] = i + 1;
}
// console.log(apDoo);
for (let elem in apDoo){
console.log(elem);
}

// let apDoo:number[] = [];
// const tot:number = 100;
// const step:number = 5;
// for(let i:number = 0; i<(tot/step); i++){
//     apDoo[i] = (i+1) * 5;
// }