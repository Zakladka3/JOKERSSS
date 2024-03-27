// Helper function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Helper function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Helper function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Helper function to divide two numbers
  function divide(a, b) {
    // Check if the divisor is not zero to avoid division by zero error
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
  
  // Example usage of helper functions
  const num1 = 10;
  const num2 = 5;
  
  console.log("Number 1:", num1);
  console.log("Number 2:", num2);
  console.log("Sum:", add(num1, num2)); // Output: 15
  console.log("Difference:", subtract(num1, num2)); // Output: 5
  console.log("Product:", multiply(num1, num2)); // Output: 50
  console.log("Quotient:", divide(num1, num2)); // Output: 2
  