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
}

console.log(countDown(aaa, arr))