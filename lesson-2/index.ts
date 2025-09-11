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

console.log(countDown(aaa, arr))