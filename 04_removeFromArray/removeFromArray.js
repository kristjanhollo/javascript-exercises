const removeFromArray = function() {
    let args = Array.from(arguments);
    let arr = args.shift();
    let newArr = arr.filter((ele) => !args.includes(ele));
    return newArr;
    
};

// Do not edit below this line
module.exports = removeFromArray;
