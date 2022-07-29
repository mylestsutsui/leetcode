// Given a string s which represents an expression, evaluate this expression and return its value. 

// The integer division should truncate toward zero.

// You may assume that the given expression is always valid. All intermediate results will be in the range of 
// [-231, 231 - 1].

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, 
// such as eval().

// Example 1:

// Input: s = "3+2*2"
// Output: 7

// Example 2:

// Input: s = " 3/2 "
// Output: 1

// Example 3:

// Input: s = " 3+5 / 2 "
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    const stack = [];
    let num = "";
    let sign = null;
    for(let i = 0; i <= s.length; i++) {
        if(s[i] === " ") continue;
        else if(!isNaN(s[i])) {
            num += s[i]
        } else if (isNaN(s[i])) {
            num = Number(num);
            switch(sign) {
                case "+":
                case null: 
                    stack.push(num);
                    break;
                case "-":
                    stack.push(-num);
                    break;
                case "*":
                    stack.push(stack.pop() * num);
                    break;
                case "/":
                    stack.push(parseInt(stack.pop() / num, 10));
                    break;
            }
            sign = s[i];
            num = "";
        }
    }
    return stack.reduce((a,b) => a + b, 0);
};