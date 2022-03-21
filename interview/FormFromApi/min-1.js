// Get the modal
var modal = document.getElementById("myModal");
let modalContent = document.querySelector('.modal-content');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "";
    document.querySelector("ol").remove();
}

var p = document.querySelector('p');

function getPosts() {
// fetch('https://jsonplaceholder.typicode.com/todos/1')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((json) => {
        // {userId: 1, id: 1, title: "sunt aut facere repellat", body: "quia eto"} X 100
        let ol = document.createElement("ol");
        modalContent.append(ol);
        for(let i=0; i<=9; i++) {
            let li = document.createElement("li");
            let title = document.createElement("h3") 
            let body = document.createElement('p');
            title.textContent = json[i].title;
            body.textContent = json[i].body;
            li.append(title);
            li.append(body);
            ol.append(li);
        }
        p.style.display = 'none';
        modal.style.display = "block";
    })        
    .catch ((error) => {
        modal.style.display = "block";
        p.textContent = 'An error occurred while sending data';
    })
}