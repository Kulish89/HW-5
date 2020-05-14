

let users = [
    {id: 1, 
    name: 'Evgeny', 
    age: 21, 
    books: 'Harry Potter'},

    {id: 2, 
    name: 'Oleg', 
    age: 20, 
    books: 'Kolobok'},
];



let div = document.createElement("div");
div.id = "container";
let table = document.createElement("table");
div.prepend(table);
let thead = document.createElement("thead");
table.prepend(thead);

let tr = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4 = document.createElement("td");
td1.innerHTML="id";
td2.innerHTML="name";
td3.innerHTML="age";
td4.innerHTML="books";
tr.prepend(td4);
tr.prepend(td3);
tr.prepend(td2);
tr.prepend(td1);
thead.append(tr);
let tbody = document.createElement("tbody");
table.append(tbody);
document.body.prepend(div);

users.forEach(function(user){
    for(let key in user){
        let td = document.createElement('td')
        td.innerHTML = user[key]
        tbody.append(td)
    }
    });


 
 










