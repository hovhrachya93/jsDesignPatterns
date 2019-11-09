class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} performs ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} has a salary ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'program creation process'
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'testing process'
  }
}

const dev = new Developer('Hrach', 100000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Anna', 90000)
console.log(tester.getPaid())
console.log(tester.work())
