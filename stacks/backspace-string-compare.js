// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a 
// backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    const stack1 = [], stack2 = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "#") {
            stack1.pop();
        }
        else stack1.push(s[i])
    }
    for(let i = 0; i < t.length; i++) {
        if(t[i] === "#") {
            stack2.pop();
        }
        else stack2.push(t[i])
    }
    if(stack1.length !== stack2.length) return false;
    for(let i = 0; i < stack1.length; i++) {
        if(stack1[i] !== stack2[i]) return false;
    }
    return true;
};