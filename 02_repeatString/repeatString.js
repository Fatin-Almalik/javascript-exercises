const repeatString = function(str, repeats) {
    output = ''
    if (repeats < 0) {
        output = 'ERROR'
    }
    for (let i = 0; i < repeats; i++) {
        output = output + str;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
