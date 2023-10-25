// document.querySelector()

// var List = document.querySelector(".list-group-item:nth-child(2)");
// List.style.backgroundColor = "green";

// var List = document.querySelector(".list-group-item:nth-child(3)");
// List.style.opacity = 0;

// // document.querySelectorAll()
// var items = document.querySelectorAll("li");
// items[1].style.color = "green";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = "green";
// }

// Creating nodes
var newdiv = document.createElement("div");
newdiv.className = "Hello";

// ADD content
var textnode = document.createTextNode("Hello Word");
// Append child
newdiv.appendChild(textnode);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

container.insertBefore(newdiv , h1);


var listnode = document.createElement("li");

var parent = document.getElementById("items");
parent.innerHTML = "<li>Hello world</li>" + parent.innerHTML;