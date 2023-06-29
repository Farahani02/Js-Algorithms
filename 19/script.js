let num=[7,8,5,17,4,8,3];
let zoj=0;
let fard=0;

function search1(num){
    for(let el of num){
        if(el%2 === 0){
            zoj++;
        }
        else fard++;
    }
}
search1(num);
console.log('zoj: ', zoj);
console.log('fard: ', fard);
