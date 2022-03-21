let list = document.querySelector('.card-list');
let p = document.querySelector('p');
let count = 0;
function getPosts2() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((json) => {
        addElements(json);
        count+10;
    })        
    .catch ((error) => {
        p.textContent = 'An error occurred while sending data';
    });

}

function addElements(json) {
    for(let i=count; i<count+10; i++) {
        let li = document.createElement("li");
        let title = document.createElement("h3") 
        let body = document.createElement('p');
        title.textContent = json[i].title;
        body.textContent = json[i].body;
        li.append(title);
        li.append(body);
        list.append(li);
    }
};


