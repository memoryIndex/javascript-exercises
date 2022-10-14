const removeFromArray = function(arr, ...toRemove) {

    newArray = [];

    main: for(let i=0; i<arr.length; i++){
        for (let j=0; j<toRemove.length;j++){
            if (arr[i]===toRemove[j]){
                continue main;
            }
        }
        newArray.push(arr[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
