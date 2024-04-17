var studentOne = {
    firstName: 'sarah',
    lastName: 'gad',
    age: 30,
    location: 'Cairo'
};
var studentTwo = {
    firstName: 'Yasmen',
    lastName: 'gad',
    age: 20,
    location: 'Aswan'
};
var studentsList = [studentOne, studentTwo];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.append(table);
//# sourceMappingURL=main.js.map