
// let myDate = new Date()
// console.log(myDate)
// console.log(typeof myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2024, 0, 23)
// console.log(myCreatedDate.toDateString())

// let myAnotherCreatedDate = new Date(2024, 0, 23, 5, 8)
// console.log(myAnotherCreatedDate.toLocaleString())

// let myAnotherCreatedDate1 = new Date("2004-03-29")
// console.log(myAnotherCreatedDate1.toLocaleString())

// let myCreatedDate = new Date(2024, 0, 23)
// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

//console.log(Math.floor(Date.now() / 1000))

let myNewDate = new Date()
console.log(myNewDate)
console.log(myNewDate.getMonth())
console.log(myNewDate.getDay())

myNewDate.toLocaleString('default', {
    weekday: "long"
})