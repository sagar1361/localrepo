
let btn = document.getElementById("AddBook");

btn.addEventListener('click', addBookmark)


function addBookmark(event){
    let Title = document.getElementById("tit").value;
    let Url = document.getElementById("URL").value;
     

    let objBookmark = {
        Title,
        Url
    };


    axios.post("https://crudcrud.com/api/f267c49d3f604c679d254c4ebb425b95/Bookmark_web", objBookmark)
        .then((response) =>{
            Show_Bookmark(response.data);
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err);
        })
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/f267c49d3f604c679d254c4ebb425b95/Bookmark_web")
        .then((response) => {

            for(var i=0;i<response.data.length;i++){
                Show_Bookmark(response.data[i])
            }
        })
        .catch((error) => {
            console.log(error)
        })
})


function Show_Bookmark(objBookmark){
    document.getElementById('tit').value='';
    document.getElementById('URL').value='';

    let parentElem = document.getElementById('list');

    let childEem = `<p id = '${objBookmark._id}'> ${objBookmark.Title}   >   ${objBookmark.Url} 
                    <button onclick = deleteBookmark('${objBookmark._id}')> Delete </button>
                    <button onclick = editBookmark('${objBookmark.Title}','${objBookmark.Url}','${objBookmark._id}')> Edit </button>
                    </p>`


    parentElem.innerHTML = parentElem.innerHTML + childEem;
}

function editBookmark(Title, Url, objBookmarkId){
    document.getElementById("tit").value=Title;
    document.getElementById("URL").value=Url;

    deleteBookmark(objBookmarkId)
}

function deleteBookmark(objBookmarkId){
    axios.delete(`https://crudcrud.com/api/f267c49d3f604c679d254c4ebb425b95/Bookmark_web/${objBookmarkId}`)
    .then((response) => {
        removeBookmark(objBookmarkId)
    })
    .catch((err) => {
        console.log(err)
    })
}

function removeBookmark(objBookmarkId){
    let parent = document.getElementById('list');
    let Bookmarktodelete = document.getElementById(objBookmarkId);
    
    if(Bookmarktodelete){
        parent.remove(Bookmarktodelete);
    }
}