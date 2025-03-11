const palindromes = function (word) {
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    return word === word.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
