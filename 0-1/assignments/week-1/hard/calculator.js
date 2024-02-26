/*
	Question:
	Implement a class Calculator with various methods for arithmetic operations and expression calculation. The calculator should handle multiple continuous spaces and invalid non-numerical characters.

	Description:
  Class: Calculator
  Description: Implements a basic calculator with arithmetic operations and expression evaluation.
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  // Getter
  getResult() {
    return this.result;
  }

  /*
    Method: calculate
    Parameter: expression (string)
    Description: Evaluates a mathematical expression and updates the result.
    Points to Note:
    - Handles division by zero and invalid expression syntax.
    - Removes continuous spaces from the expression before evaluation.
  */
  calculate(expression) {
    // Remove all spaces from the expression
    let cleanedExpression = expression.replace(/\s/g, '');

    // Check for division by zero
    if (/\/0/.test(cleanedExpression)) {
      throw new Error('Division by zero is not allowed.');
    }

    // Use try-catch for evaluating the expression
    try {
      this.result = eval(cleanedExpression);
    } catch (error) {
      throw new Error('Invalid expression syntax.');
    }
  }
}

// Export the Calculator class for reuse in other modules
module.exports = Calculator;
