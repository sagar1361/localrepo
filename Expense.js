function Add_exp(event) {
    event.preventDefault();

    let Amount = document.getElementById("Amount").value;
    let Description = document.getElementById("Description").value;
    let Cetegory = document.getElementById("cetegory").value;


    let obj = {
        Amount,
        Description,
        Cetegory
    };   

    let myObjs = JSON.stringify(obj);
                        
    localStorage.setItem("Exp", myObjs);

    let my_objd = JSON.parse(localStorage.getItem("Exp"));
     
    ExpenseList(obj);
};


function ExpenseList(obj){
  
    parentElem = document.querySelector("#Expense-list");
    childElem = document.createElement("li");

    childElem.textContent =  obj.Amount +" - " + obj.Description + " - " + obj.Cetegory;
    parentElem.appendChild(childElem);

   //  Adding Remove button 
   let removebtn = document.createElement("button");
   removebtn.innerText = "Remove";
   childElem.appendChild(removebtn);
   

   removebtn.addEventListener("click", () => {
   localStorage.removeItem("Exp");
   parentElem.removeChild(childElem);
});

   
   //  Adding Edit button 
   let Editbtn = document.createElement("button");
   Editbtn.innerText = "Edit";
   childElem.appendChild(Editbtn);
   
   Editbtn.addEventListener("click" , () => {
     localStorage.removeItem(obj.emailId);
     parentElem.removeChild(childElem);
     document.querySelector("#Amount").value = obj.Amount;
     document.querySelector("#Description").value = obj.Description;
     document.querySelector("#cetegory").value = obj.Cetegory;
    
   });
    childElem.appendChild(editbtn);
};