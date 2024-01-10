/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Teacher.ts" />

import { Subjects } from './subjects/Subject';
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Create constants for Cpp, Java, React Subjects
const cpp: Subjects.Cpp = new Cpp();
const java: Subjects.Java = new Java();
const react: Subjects.React = new React();

// Create and export constant cTeacher with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: 'Example',
  lastName: 'Teacher',
  experienceTeachingC: 10,
};

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
