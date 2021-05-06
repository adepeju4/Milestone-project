let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let userAge = document.querySelector("#age");
let currentLevel = document.querySelector("#currentLevel");
let faveClub = document.querySelector("#faveClub");
let userSubmit = document.querySelector(".submit");
let table_body = document.querySelector(".table-body");
let table = document.querySelector(".table");


let objectArray = [];



userSubmit.addEventListener('click', onClick);
table_body.addEventListener('click', deleteRow);

function onClick(event) {
    event.preventDefault();
    createObjectAndPushToArray();
    putObjectInTable(objectArray);
}

function createObjectAndPushToArray() {

    let object = {
        first_Name: firstName.value,
        last_Name: lastName.value,
        user_age: userAge.value,
        current_level: currentLevel.value,
        fave_club: faveClub.value
    }
    let jsonObject = JSON.stringify(object);
    objectArray.push(jsonObject);

}

function putObjectInTable(myArray) {
    let position = "beforeEnd";
    let row;
    myArray.forEach((value) => {
        let newValue = JSON.parse(value);
        row = `<tr>
                   <th scope="row" id="firstName">${newValue.first_Name}</th>
                   <td>${newValue.last_Name}</td>
                   <td>${newValue.user_age}</td>
                   <td>${newValue.current_level}</td>
                   <td>${newValue.fave_club}</td>
                   <td><button class="delete-row">Delete User</button></td>
               </tr>`;

    })
    return table_body.insertAdjacentHTML(position, row);

}


function deleteRow(event) {
    if (event.target.classList.contains("delete-row")) {
        event.target.closest("tr").remove();
    }
}