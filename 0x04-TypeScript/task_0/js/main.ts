// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'San Francisco',
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
  const table = document.createElement('table');

  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
}

// Call the renderTable function to display the table
renderTable();
