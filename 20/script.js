let a = 0;
let b = 0;
let c = 0;
let d = 0;

for (let i = 1000; i < 10000; i++) {
    a = i / 1000;
    let x = i % 1000;
    if (x > 100 && x < 1000) {
        b = x / 100;
        x %= 100;
    } else if (x < 100 && x > 10) {
        c = x / 10;
        d = x % 10;

    } else {
        d = x;

    }
    if (b % 2 === 0 && d % 2 === 0 && a % 2 !== 0 && c % 2 !== 0) {
        console.log(i);
    }
}
