
// Basic Comparisons
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// value is converted on runtime so make sure tybe it same
// console.log("2" > 1);
// console.log("02" > 1);


// value it converted so make sure type is same otherwise result is not expected
// the reason is that and equality check == and comparisons > < >= <= work differently
// Comparison convert null to a number treating it as a 0 thsi is why 3rd valueis true ans other is false
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// double equal == convert datatype and check the value
console.log("2" > 1)

// tripple equal === is strict check it also check data type
console.log("2" === 1);
