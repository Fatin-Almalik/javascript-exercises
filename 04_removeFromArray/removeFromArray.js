const removeFromArray = function(array) {
    const args = Array.from(arguments); //to handle optional args
    output = [...array]; //copy the input array to modify it later

    for (let j = 0; j < args.length; j++) { //loop over the optional args
        for (let i = 0; i < array.length; i++) { //loop over the array    
            if (array[i] === args[j]) { //deep equality, so 1 != '1'
                //remove args[i] from the output array
                array.splice(i, 1);
                break; //a matching element was found and removed
            }
            
        }
        
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;