interface Student {
    firstName : string;
    lastName : string;
    age : number;
    location : string
}

let studentOne : Student = {
    firstName : 'sarah',
    lastName : 'gad',
    age : 30,
    location : 'Cairo' 
}

let studentTwo : Student = {
    firstName : 'Yasmen',
    lastName : 'gad',
    age : 20,
    location : 'Aswan' 
}

const studentsList : Student[] = [studentOne , studentTwo];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

document.body.append(table);