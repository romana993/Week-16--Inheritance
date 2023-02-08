function Person(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  };
  
  
  function Employee(name, lastname, job, salary) {
    Person.call(this, name, lastname);
    this.job = job;
    this.salary = salary;
  }
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  
  /* Employee methods */
  Employee.prototype.getData = function () {
    return this.name + " " + this.lastname + " " + this.salary;
  };
  Employee.prototype.getSalary = function () {
    console.log("Salary: " + this.salary);
  };
  Employee.prototype.increaseSalary = function () {
    this.salary = this.salary * 1.1;
    return this.salary;
  };
  
  
  function Developer(name, lastname, job, salary, specilization) {
    Employee.call(this, name, lastname, job, salary);
    this.specilization = specilization;
  }
  Developer.prototype = Object.create(Employee.prototype);
  Developer.prototype.constructor = Developer;
  
  
  Developer.prototype.getSpecilization = function () {
    console.log("Specilization: " + this.specilization);
  };
  
  
  function Manager(name, lastname, job, salary, department) {
    Employee.call(this, name, lastname, job, salary);
    this.department = department;
  }
  Manager.prototype = Object.create(Employee.prototype);
  Manager.prototype.constructor = Manager;
  
  
  Manager.prototype.getDepartment = function () {
    console.log("Department: " + this.department);
  };
  Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment
    console.log( "New department is" + " " + this.department);
  };
  
  
  var developer = new Developer("Marija", "Lazic", "Front End developer", 1500, "JavaScript");
  var manager = new Manager("Natasa", "Milic", "Engeneer", 2000, "FrontEnd");
  var employee = new Employee("Milica", "Pavlovic", "Coder", 1700);
  
  
  developer.getSpecilization();
  manager.getDepartment();
  manager.changeDepartment("Full Stack");
  
  console.log(employee.getData());
  employee.getSalary();
  console.log(employee.increaseSalary());

  console.log(developer.getData());
  developer.getSalary();
  
  