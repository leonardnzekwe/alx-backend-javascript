// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional attributes without specifying their names
}

// Create a teacher instance
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Example of an additional attribute
};

console.log(teacher3); // Output the teacher object

// Define the Directors interface by extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a director instance
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1); // Output the director object

// Define the printTeacherFunction interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function based on the interface
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  const firstLetter = firstName.charAt(0);
  const fullLastName = lastName;

  return `${firstLetter}. ${fullLastName}`;
};

// Test the printTeacher function
const result: string = printTeacher('John', 'Doe');
console.log(result); // Output the result

// Interface describing the constructor of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface describing the methods and properties of StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test the StudentClass
const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: John
