export class Studentlist {
  constructor() {
    this.students = [
      {
        studentnumber: 1,
        name: "sifiso",
        level: "postgrad",
        age: 11,
        address: "123 United states"
      },
      {
        studentnumber: 2,
        name: "sifiso",
        level: "undergrad",
        age: 11,
        address: "123 United states"
      },
      {
        studentnumber: 3,
        name: "sifiso",
        level: "postgrad",
        age: 11,
        address: "123 United states"
      }
    ]
  }

  students(){
    return this.students
  }
  addstudents(student){
    this.students.push(student)
  }

}
