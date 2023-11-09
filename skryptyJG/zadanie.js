let nazwisko = "Gładykowski";
let ID = 33970;

let ID5 = Math.floor(ID/10000);
console.log(ID5);
let ID4 = Math.floor((ID%10000)/1000);
console.log(ID4);
let ID3 = Math.floor((ID%1000)/100);
console.log(ID3);
let ID2 = Math.floor((ID%100)/10);
console.log(ID2);
let ID1 = ID%10;
console.log(ID1);

let IDtab = [ID5,ID4,ID3,ID2,ID1];

let IDtab2 = [ID3,ID2,ID1];

function plus(a,b=10,c=100){return a+b+c};
function plus2(a=-ID1,...b){
    for (let n of b){
        a+=n;
    }
    return a;
};

let wynik = 0;

wynik = plus(ID1,ID5);


console.log(wynik);

console.log("--------");

wynik = plus(nazwisko[1],ID1,ID5);

console.log(wynik);

wynik = plus(ID1,nazwisko[1],ID5);

console.log(wynik);

wynik = plus(ID1,ID5,nazwisko[1]);

console.log(wynik);

console.log("--------");

wynik = plus2(...IDtab2);

console.log(wynik);

wynik = plus2();

console.log(wynik);