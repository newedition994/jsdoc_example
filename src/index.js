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
