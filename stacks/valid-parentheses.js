// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const matching = {
        "}": "{",
        "]": "[",
        ")": "("
    }
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "{" || s[i] === "[" || s[i] === "(") {
            stack.push(s[i])
        } else {
            if(stack.pop() !== matching[s[i]]) return false;
        }
    }
    if(stack.length) return false;
    return true;
};