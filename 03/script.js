let sum = 0;
for (let i = 1; i <= 900; i++) {
    if (i % 9 === 0) {
        console.log(i);
        sum += i;
    };
};
console.log("sum: " + sum);

