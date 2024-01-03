export default function createIteratorObject(report) {
  function* iterateEmployees(report) {
    for (const employees of Object.values(report.allEmployees)) {
      for (const employee of employees) {
        yield employee;
      }
    }
  }

  return {
    [Symbol.iterator]() {
      return iterateEmployees(report);
    },
  };
}
