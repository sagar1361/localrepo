// console.log(document.getElementById("header-title"));
// var Title = document.getElementById("header-title");
// Title.textContent = "Hello";
// Title.innerText ="Hey";
// Title.style.borderBottom = "solid 3px #000";
// var AddItem = document.getElementById("main");
// AddItem.innerText;


// document.getElementsByClassName
// var items = document.getElementsByClassName("list-group-item");
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = "bold";
// }
// items[2].style.backgroundColor = "green";

// document.getElementsByTagName
var List = document.getElementsByTagName("li");
for(var i=0;i<List.length;i++){
    List[i].style.fontWeight = "bold";
}

List[2].style.backgroundColor = "green";
List[4].style.color = "red";
