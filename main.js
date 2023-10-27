var form = document.getElementById("addForm");
var Addlist = document.getElementById("items");

// Submit Event
form.addEventListener("submit", addItem);
// Adding function
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById("item").value;
    // creating new li Element
    var list = document.createElement("li");

    list.className = "list-group-item";
    // Adding text node
    list.appendChild(document.createTextNode(newItem));
    // Creating delete button
    var delbtn = document.createElement("button");
    delbtn.className = "btn btn-danger btn-sm float-right delete";

    var Editbtn = document.createElement("button");
    Editbtn.className = "btn btn-danger btn-sm float-right delete";
    // Append textnode
    delbtn.appendChild(document.createTextNode(" X"));

    Editbtn.appendChild(document.createTextNode("+"));
    // appent btn to list
    list.appendChild(delbtn);
    list.appendChild(Editbtn);
    Addlist.appendChild(list);
}

// Delete Event
Addlist.addEventListener("click", removeItem);
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            var list = e.target.parentElement;
            Addlist.removeChild(list);
        }
    }
}
