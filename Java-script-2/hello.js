
alert("Do I know you?");
function myFunction() {
let text;
let person = prompt("Please enter your name");
switch(person) {
    case "Jessie":
      text = "Hello Jessie, you are awesome!";
      break;
    case "Jesse":
      text = "Hello Jesse, smile everything will be OK!";
      break;
    case "Jessy":
      text = "Really? Are you sure you spell it that way?";
      break;
    default:
      text = "I don't think I know who you are!";
  }
  document.getElementById("person").innerHTML = text;
}