function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
if (dolphin === true) {
let newSharkSpeed = sharkSpeed/2
if (pontoonDistance/youSpeed < sharkDistance/newSharkSpeed){
return "Alive!"
}else{
return "Shark Bait!"
}
} else{
if ((pontoonDistance/youSpeed) < (sharkDistance/sharkSpeed)){
return "Alive!"
}else{
return"Shark Bait!"
 }
}
}
