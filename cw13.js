function differenceInAges(ages){
// find oldest living family member
// given array [ages]
// possibly out-of-order
// age in months == 0
// return new array [youngest, oldest, difference]

// sort array
// take array[0] and array[length-1]
// subtract values
// return [array[0], array[length-1], (array[length-1] - array[0])]

let oldest = Math.max.apply(null,ages)
let youngest = Math.min.apply(null,ages)
return [youngest, oldest, oldest - youngest]
