// A)
let n = 12;
let x = 5;
let p = 0;
let array1 = [];
let j = 0;

for (let i = 1; i <= n; i++) {

    if (i % 3 === 0) {

        array1[j] = i;
        j++;
    };
};

console.log("N= " + n);
console.log(array1);

for (let e = 0; e < array1.length; e++) {
    p += (1 / array1[e]);
}
console.log("P: " + p);


// B)
let s = 0;
let xx = 5;
let nn = 2;
for (let i = 2; i <= nn; i++) {
    for (let j = 0; j < i; j++) {
        xx *= xx;
    }
    s += xx
}
s += 6;
console.log("S: " + s);


// C)

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    for (let i = num - 1; i >= 1; i--) {
        num = num * i;
    }

    return num;
}

console.log(factorial(5));


// D)
let t = 0;
for (let i = 2; i <= 12; i++) {
    t += (i - 1) * i;
}
console.log("T= "+ t);