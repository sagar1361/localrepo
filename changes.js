// document.querySelector()

var List = document.querySelector(".list-group-item:nth-child(2)");
List.style.backgroundColor = "green";

var List = document.querySelector(".list-group-item:nth-child(3)");
List.style.opacity = 0;

// document.querySelectorAll()
var items = document.querySelectorAll("li");
items[1].style.color = "green";

var odd = document.querySelectorAll("li:nth-child(odd)");
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = "green";
}