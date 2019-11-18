// @ts-check
//const { add, subtractm divide, multiply } = require('./calculator');

/**
 * @file index.js is the root file for this example
 * @author Breyanna Vass
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = "John Doe";

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89];

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
  id: "1",
  text: "Hello"
};

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - tax percentage
 * @returns {string} - total with dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: "Jason Marks",
  age: 21,
  isActive: true
};

/**
 * Class to create a person object
 */
class Person {
  /**
   *
   * @param {Object} personInfo Information about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name Persons name
     */
    this.name = personInfo.name;
    /**
     * @property {string} age Persons age
     */
    this.age = personInfo.age;
  }
  /**
   * @property {Function} greet A greeting with the name and age
   * @returns void
   */

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

/**
 * See {@link Person}
 */
const person1 = new Person({
  name: "Mack Andrews",
  age: 29
});
