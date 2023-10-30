var form = document.getElementById("addForm");
var Addlist = document.getElementById("items");
var filter  = document.getElementById("filter");

// Submit Event
form.addEventListener("submit", addItem);
// Adding function
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById("item").value;
    var newdesp = document.getElementById("description").value;
    // creating new li Element
    var list = document.createElement("li");

    list.className = "list-group-item";
    // Adding text node
    list.appendChild(document.createTextNode(newItem));
    list.appendChild(document.createTextNode(newdesp));
    // Creating delete button
    var delbtn = document.createElement("button");
    delbtn.className = "btn btn-danger btn-sm float-right delete";

    var Editbtn = document.createElement("button");
    Editbtn.className = "btn btn-danger btn-sm float-right delete";
    // Append textnode
    delbtn.appendChild(document.createTextNode(" X"));

    Editbtn.appendChild(document.createTextNode("Edit"));
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

// Filter Event
filter.addEventListener("keyup", filterItems);

function filterItems(e){
    e.preventDefault(); 
    // convert text to Lowercase
    var lcase = e.target.value.toLowerCase();
    // get list
    var items = Addlist.getElementsByTagName("li");
    // convert to an Array
    Array.from(items).forEach(function(list){
        var itemName = list.firstChild.textContent + list.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(lcase) != -1){
            list.style.display = "block";
        } 
        else{
            list.style.display = "none";
        }
    });
}
