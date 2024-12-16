# JavaScript Calculator

This is a simple JavaScript calculator built using **React**. It follows the [FreeCodeCamp JavaScript Calculator project](https://javascript-calculator.freecodecamp.rocks/), fulfilling all the user stories provided by FreeCodeCamp.

## Features

- Perform basic arithmetic operations: addition, subtraction, multiplication, and division.
- Supports decimal points and handles floating-point precision.
- Clear input and output using the "AC" button.
- Displays the current expression and result in real time.
- Prevents multiple leading zeros and handles invalid input gracefully.
- Chain operations and see the result when pressing `=`.

## User Stories Fulfilled

1. My calculator should contain a clickable element containing an "=" (equal sign) with a corresponding id="equals".
2. My calculator should contain 10 clickable elements containing one number each from 0-9, with the corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".
3. My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the corresponding IDs: id="add", id="subtract", id="multiply", id="divide".
4. My calculator should contain a clickable element containing a "." (decimal point) symbol with a corresponding id="decimal".
5. My calculator should contain a clickable element with an id="clear".
6. My calculator should contain an element to display values with a corresponding id="display".
7. At any time, pressing the clear button clears the input and output values and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.
8. As I input numbers, I should be able to see my input in the element with the id of display.
9. I should be able to add, subtract, multiply, and divide a chain of numbers, and when I hit `=`, the correct result should be shown in the element with the id of display.
10. The calculator should not allow numbers to begin with multiple zeros.
11. When the decimal element is clicked, a "." should append to the currently displayed value; two decimal points should not be allowed in one number.
12. I should be able to perform any operation on numbers containing decimal points.
13. If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign).
14. Pressing an operator immediately following `=` should start a new calculation based on the result of the previous evaluation.
15. The calculator should have several decimal places of precision when it comes to rounding.

## Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling the app.
- **JavaScript**: For implementing the logic of the calculator.
- **FreeCodeCamp Test Suite**: For validating the functionality of the app.
