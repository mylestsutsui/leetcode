// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// Example 1:

// Input: s = "hello"
// Output: "holle"

// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    let start = 0, end = s.length - 1;
    const letters = s.split('');
    const vowels = {
        "a": true,
        "e": true,
        "i": true,
        "o": true,
        "u": true,
        "A": true,
        "E": true,
        "I": true,
        "O": true,
        "U": true
    }
    let startVowel = false, endVowel = false;
    while(start <= end) {
        if(vowels[letters[start]]) startVowel = true;
        if(vowels[letters[end]]) endVowel = true;
        if(startVowel && endVowel) {
            startVowel = false;
            endVowel = false;
            let temp = letters[start];
            letters[start] =letters[end];
            letters[end] = temp;
            start += 1;
            end -= 1;
        } else if(startVowel) {
            end -= 1;
        } else if(endVowel) {
            start += 1;
        } else {
            end -= 1;
            start += 1;
        }
    }
    return letters.join('');
};