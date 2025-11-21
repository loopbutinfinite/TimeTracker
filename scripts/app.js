import data from "../data/data.json" with {type:"json"};

//Create our variables that will make the Daily, Weekly, and Monthly clickable
const dailyStats = document.getElementById("dailyStats");
const weeklyStats = document.getElementById("weeklyStats");
const monthlyStats = document.getElementById("monthlyStats");
//End of variable for daily, weekly, monthly stats

//Create our variables for the current and previous times inside the activity cards.
const workCurrentTime = document.getElementById("workCurrentTime");
const workPreviousTime = document.getElementById("workPreviousTime");
const playCurrentTime = document.getElementById("playCurrentTime");
const playPreviousTime = document.getElementById("playPreviousTime");
const studyCurrentTime = document.getElementById("studyCurrentTime");
const studyPreviousTime = document.getElementById("studyPreviousTime");
const exerciseCurrentTime = document.getElementById("exerciseCurrentTime");
const exercisePreviousTime = document.getElementById("exercisePreviousTime");
const socialCurrentTime = document.getElementById("socialCurrentTime");
const socialPreviousTime = document.getElementById("socialPreviousTime");
const selfcareCurrentTime = document.getElementById("selfcareCurrentTime");
const selfcarePreviousTime = document.getElementById("selfcarePreviousTime");
//End of our variables for current and previous times

console.log(data[0].timeframes.daily.current) //Displays the current time for Work from the JSON file
console.log(data[0].timeframes.daily.previous) //Displays the previous time for Work from the JSON file
//event listener that invokes a function when user clicks on Daily.
dailyStats.addEventListener("click", function () {
    workCurrentTime.innerText = `${data[0].timeframes.daily.current}hrs`; //Work
    workPreviousTime.innerText = `Yesterday - ${data[0].timeframes.daily.previous}hrs`
    playCurrentTime.innerText = `${data[1].timeframes.daily.current}hrs`; //Play
    playPreviousTime.innerText = `Yesterday - ${data[1].timeframes.daily.previous}hrs`
    studyCurrentTime.innerText = `${data[2].timeframes.daily.current}hrs`; //Study
    studyPreviousTime.innerText = `Yesterday - ${data[2].timeframes.daily.previous}hrs`
    exerciseCurrentTime.innerText = `${data[3].timeframes.daily.current}hrs`; //Exercise
    exercisePreviousTime.innerText = `Yesterday - ${data[3].timeframes.daily.previous}hrs`
    socialCurrentTime.innerText = `${data[4].timeframes.daily.current}hrs`; //Social
    socialPreviousTime.innerText = `Yesterday - ${data[4].timeframes.daily.previous}hrs`
    selfcareCurrentTime.innerText = `${data[5].timeframes.daily.current}hrs`; //Self Care
    selfcarePreviousTime.innerText = `Yesterday - ${data[5].timeframes.daily.previous}hrs`
});

console.log(data[0].timeframes.weekly.current)
console.log(data[0].timeframes.weekly.previous)

weeklyStats.addEventListener("click", function () {
    workCurrentTime.innerText = `${data[0].timeframes.weekly.current}hrs`;
    workPreviousTime.innerText = `Last Week - ${data[0].timeframes.weekly.previous}hrs`
    playCurrentTime.innerText = `${data[1].timeframes.weekly.current}hrs`;
    playPreviousTime.innerText = `Last Week - ${data[1].timeframes.weekly.previous}hrs`
    studyCurrentTime.innerText = `${data[2].timeframes.weekly.current}hrs`;
    studyPreviousTime.innerText = `Last Week - ${data[2].timeframes.weekly.previous}hrs`
    exerciseCurrentTime.innerText = `${data[3].timeframes.weekly.current}hrs`;
    exercisePreviousTime.innerText = `Last Week - ${data[3].timeframes.weekly.previous}hrs`
    socialCurrentTime.innerText = `${data[4].timeframes.weekly.current}hrs`;
    socialPreviousTime.innerText = `Last Week - ${data[4].timeframes.weekly.previous}hrs`
    selfcareCurrentTime.innerText = `${data[5].timeframes.weekly.current}hrs`;
    selfcarePreviousTime.innerText = `Last Week - ${data[5].timeframes.weekly.previous}hrs`
});

console.log(data[0].timeframes.monthly.current)
console.log(data[0].timeframes.monthly.previous)

monthlyStats.addEventListener("click", function (){
    workCurrentTime.innerText = `${data[0].timeframes.monthly.current}hrs`;
    workPreviousTime.innerText = `Last Month - ${data[0].timeframes.monthly.previous}hrs`
    playCurrentTime.innerText = `${data[1].timeframes.monthly.current}hrs`;
    playPreviousTime.innerText = `Last Month - ${data[1].timeframes.monthly.previous}hrs`
    studyCurrentTime.innerText = `${data[2].timeframes.monthly.current}hrs`;
    studyPreviousTime.innerText = `Last Month - ${data[2].timeframes.monthly.previous}hrs`
    exerciseCurrentTime.innerText = `${data[3].timeframes.monthly.current}hrs`;
    exercisePreviousTime.innerText = `Last Month - ${data[3].timeframes.monthly.previous}hrs`
    socialCurrentTime.innerText = `${data[4].timeframes.monthly.current}hrs`;
    socialPreviousTime.innerText = `Last Month - ${data[4].timeframes.monthly.previous}hrs`
    selfcareCurrentTime.innerText = `${data[5].timeframes.monthly.current}hrs`;
    selfcarePreviousTime.innerText = `Last Month - ${data[5].timeframes.monthly.previous}hrs`
});