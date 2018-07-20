console.log("asd");
function daa() {
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }

today = yyyy+'-'+mm+'-'+dd;
// document.getElementById("dddd").innerHTML = today;
document.getElementById("task-dueDate").setAttribute("min", today);
  // var dnow = Date.now();
  // document.getElementById("task-dueDate").setAttribute("min", dnow);
}
daa();
