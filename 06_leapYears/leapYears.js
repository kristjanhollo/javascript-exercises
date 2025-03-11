const leapYears = function(e) {
    return e % 100 === 0 ? e % 400 === 0 : e % 4 === 0;
};

// Do not edit below this line
module.exports = leapYears;
