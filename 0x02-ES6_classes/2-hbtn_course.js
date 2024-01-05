class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;

    HolbertonCourse.validateType(name, 'string', 'Name');
    HolbertonCourse.validateType(length, 'number', 'Length');
    HolbertonCourse.validateType(students, 'object', 'Students');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    HolbertonCourse.validateType(newName, 'string', 'Name');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    HolbertonCourse.validateType(newLength, 'number', 'Length');
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    HolbertonCourse.validateType(newStudents, 'object', 'Students');
    this._students = newStudents;
  }

  static validateType(value, expectedType, attribute) {
    /* eslint-disable valid-typeof */
    if (typeof value !== expectedType) {
      throw new TypeError(`${attribute} must be a ${expectedType}`);
    }
  }
}

export default HolbertonCourse;
