const user = {
  firstName: "Muhamed",
  lastName: "Muminovic",
  yearOfBith: 1995,
  city: "Novi Pazar",
  graduated: true,
  calculateAge: function () {
    const yearNow = new Date().getFullYear();
    return yearNow - this.yearOfBith;
  },
};

class User {
  constructor(firstName, lastName, yearOfBith, city, graduated) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBith = yearOfBith;
    this.city = city;
    this.graduated = graduated;
  }

  calculateAge() {
    const yearNow = new Date().getFullYear();
    return yearNow - this.yearOfBith;
  }

  printMyNameAndAge() {
    const myAge = this.calculateAge();
    console.log(this.firstName, myAge);
  }
}

const myUser = new User("Muhamed", "Muminovic", 1995, "Novi Pazr", true);

class Student extends User {
  constructor(firstName, lastName, yearOfBith, city, graduated, averageScore) {
    super(firstName, lastName, yearOfBith, city, graduated);
    this.averageScore = averageScore;
  }

  printMyNameAndAge() {
    console.log("student");
  }
}

const student = new Student(
  "Muhamed",
  "Muminovic",
  1995,
  "Novi Pazr",
  true,
  9.71
);

student.printMyNameAndAge();
