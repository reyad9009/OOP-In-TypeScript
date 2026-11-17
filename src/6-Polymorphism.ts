//* Inheritance মানে হলো একটি Class অন্য একটি Class-এর Properties (Data) এবং Methods (Function) ব্যবহার করতে পারা।

//* অর্থাৎ, একটি Parent Class-এর বৈশিষ্ট্য অন্য একটি Child Class গ্রহণ করতে পারে।

//* এর ফলে একই Code বারবার লিখতে হয় না।

class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }
  describe(): string {
    return `${this.name} earns ${this.baseSalary} $`;
  }
}
class Manager extends Employee {
  //   teamMemberCount: number;
  //   constructor(name: string, _baseSalary: number, teamMemberCount: number) {
  //     super(name, _baseSalary);
  //     this.teamMemberCount = teamMemberCount;
  //   }
  constructor(
    name: string,
    _baseSalary: number,
    public teamMemberCount: number,
  ) {
    super(name, _baseSalary);
  } 
  describeWork(): string {
    return `${this.name} manages ${this.teamMemberCount} people `;
  }
}
const employee = new Employee("Tarek", 123);
console.log(employee.describe())

const manager = new Manager("Mizan", 2400, 20);
console.log(manager.describeWork());
