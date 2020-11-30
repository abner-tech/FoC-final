<!--
function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value
if(weight > 0 && height > 0){	
var finalBmi = (703*weight)/(height*height)
document.bmiForm.bmi.value = finalBmi
if(finalBmi < 18.5){
document.bmiForm.meaning.value = "You are too thin put some meat on them bones."
}
if(finalBmi > 18.5 && finalBmi < 25){
document.bmiForm.meaning.value = "You are healthy perfectly balanced as all things should be."
}
if(finalBmi > 25){
document.bmiForm.meaning.value = "You are overweight its time you hit the gym pork-chops"
}
}
else{
alert("Please Fill in everything correctly")
}
}
//-->
