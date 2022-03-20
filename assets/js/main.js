console.log("JS is working!")

const currentDay = $("#currentDay")

function displayTime() {
    let rightNow = moment().format('dddd, MMMM do [at] hh:mm:ss a');
    currentDay.text(rightNow);
  }

currentTime = setInterval(function(){
    displayTime()
}, 1000)
displayTime()  