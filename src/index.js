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
