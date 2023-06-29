const array1 = [2, 3, 1, 6];
let sum = array1[2] + array1[3];

for (let j = 0; j <= 3; j++) {
    console.log("Number " + (j + 1) + " is : " + array1[j]);
}


if (array1[0] > sum) {
    console.log(array1[0] + "*" + array1[2] + "=" + (array1[0] + array1[2]));
}
else {
    console.log(array1[1] + "*" + array1[3] + "=" + (array1[1] * array1[3]));
    sum = array1[1] * array1[3];
}
