let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let userAge = document.querySelector("#age");
let currentLevel = document.querySelector("#currentLevel");
let faveClub = document.querySelector("#faveClub");
let userSubmit = document.querySelector(".submit");
let table_body = document.querySelector(".table-body");

let objectArray = [];



userSubmit.addEventListener('click', onClick);

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
    let output = "";
    myArray.forEach((value) => {
        let newValue = JSON.parse(value);
        let row = `<tr>
                   <th scope="row" id="firstName">${newValue.first_Name}</th>
                   <td>${newValue.last_Name}</td>
                   <td>${newValue.user_age}</td>
                   <td>${newValue.current_level}</td>
                   <td>${newValue.fave_club}</td>
                   <td><button>Delete User</button></td>
               </tr>`;
        output += row;
    })
    return table_body.innerHTML = output;

}









// let nValue = JSON.parse(values);
//         let row = `
//         <tr class = "table-row">
//             <td>${nValue.fName}</td>
//             <td>${nValue.sName}</td>
//             <td>${nValue.Age}</td>
//             <td>${nValue.current_level}</td>
//             <td>${nValue.favourite_club}</td>
//             <td><i class="far fa-trash-alt delete"></i></td>
//         </tr>
//         `
//         output+=row
//     })
//    return tableBody.innerHTML = output;