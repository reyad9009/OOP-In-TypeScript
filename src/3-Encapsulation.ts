//* Keyword	        কাজ
// public	        সবার জন্য উন্মুক্ত
// private	        শুধু নিজের Class
// protected	    নিজের ও Child Class
// get	Value       পড়া
// set	Value       পরিবর্তন

//* Encapsulation কেন ব্যবহার করব?
// 1. Data Protection: Data-কে সরাসরি পরিবর্তন থেকে নিয়ন্ত্রণ করা যায়।
// 2. Security: নির্দিষ্ট নিয়ম মেনে Data Access করা যায়।
// 3. Maintainability: Code পরিচালনা ও পরিবর্তন করা সহজ হয়।
// 4. Validation: ভুল Data প্রবেশ করা আটকানো যায়।
// 5. Control: কোন Data কীভাবে পরিবর্তন হবে, তা নির্ধারণ করা যায়

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
}
const employee = new Employee("Tarek", 123);
const employee2 = new Employee("Reyad", 154);
employee.baseSalary = 3000;
console.log(employee.baseSalary);
