class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  };
  registerStudent(studentToRegister) {
    if (!studentToRegister.name || !studentToRegister.email) {
      console.log(`Invalid name or email`);
      return false;
    }
    //.some() test wether at least one element in the array passes a certain test(returns true or false)
    const hasDuplicateEmail = this.students.some(student => student.email === studentToRegister.email);
    if(hasDuplicateEmail) {
      console.log(`Email is already registered`);
      return false;
    }

    this.students.push(studentToRegister);
    console.log(`Student ${studentToRegister.name} registered for ${this.name} bootcamp.`)
    return true;
  };
  listStudents() {
    if(this.students === null || this.students.length <= 0) {
      console.log(`No students are registered to the ${this.name} bootcamp.`);
      return false;
    } else {
      console.log(`The students registered in ${this.name} are: `)
      for (const student of this.students) {
        console.log(`Name: ${student.name}, Email: ${student.email}`);
      }
      return true;
    }
  };
  getInfo() {
    return `Bootcamp: ${this.name}, Level: ${this.level}.`
  };
  removeStudent(email) {
    let removeStudents = this.students.filter(student => student.email !== this.email)

    if(removeStudents.length === this.students.length) {
      console.log(`Student with email ${email} was not found.`);
    } else {
      this.students = removeStudents;
      console.log(`Student with email ${email} has been removed.`)
    }
  }
}


testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if(testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
  console.log('TASK 1: PASS')
}

reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if(reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced' && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
  console.log('TASK 2: PASS')
}



const runTest = (bootcamp, student) => {
  const attemptOne = bootcamp.registerStudent(student);
  const attemptTwo = bootcamp.registerStudent(student);
  const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
  if ( attemptOne && !attemptTwo && !attemptThree) {
      console.log("TASK 3: PASS");
  }

  bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
  if (bootcamp.listStudents()) {
      console.log("TASK 4: PASS 1/2");
  }
  bootcamp.students = [];
  if (!bootcamp.listStudents()) {
      console.log("TASK 4: PASS 2/2");
  }
};

runTest(reactBootcamp, testStudent);


const bootcamp = new Bootcamp("Web Development", "Beginner", [
  new Student("Alice", "alice@example.com"),
  new Student("Bob", "bob@example.com"),
]);

console.log("Before removal:");
bootcamp.listStudents();
bootcamp.removeStudent("bob@example.com");
console.log("After removal:");
bootcamp.listStudents();
console.log(bootcamp.getInfo()); // Output: Bootcamp: Web Development, Level: Beginner
