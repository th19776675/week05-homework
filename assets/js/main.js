console.log("JS is working!")

const currentDay = $("#currentDay")
const inputFields = $("input")



const saveButton = $("button")

// Clock 

function displayTime() {
    let rightNow = moment().format('dddd, MMMM Do [at] hh:mm:ss a');
    currentDay.text(rightNow);
  }

  
//  Task List

let savedTasks = ["", "", "", "", "", "", "", "", ""];

function checkLock() {
  for (let i = 0; i < 9 ; i++) {
    if (savedTasks[i] === "") {
      saveButton[i].textContent = "🔓"
    } else{
      saveButton[i].textContent = "🔒"
    }
  }
}



function fillTasks() {
  if (JSON.parse(localStorage.getItem("localSavedTasks")) !== null) {
    savedTasks = JSON.parse(localStorage.getItem("localSavedTasks"))
  }
  for (let i = 0; i < 9; i++) {
    let savedTask = savedTasks[i];
    console.log(i)
      inputFields[i].value = savedTask
  }
}


function init() {
  fillTasks();
  checkLock();
  updateTasks()
}

saveButton.click(function(target){
  let button = $(event.target)
  let input = button.parent().prev().children()
  savedTasks[input.data("id")] = input.val()
  localStorage.setItem("localSavedTasks", JSON.stringify(savedTasks))
  fillTasks()
  checkLock()
})

function updateTasks() {
  for (let i = 0; i < 9; i++) {
    let input = $(inputFields[i])
    if (input.data("time") == moment().format("kk")) {
      input.css("background-color", "lightcoral");
    } else if (input.data("time") > parseInt(moment().format("kk"))) {
      input.css("background-color", "lightgreen");
    } else{
      input.css("background-color", "lightgray");
    }
  }
}

// Interval

setInterval(function(){
    displayTime()
    updateTasks()
}, 1000)

init();
