const fibonacci = function(times) {
    times = parseInt(times);
    let fibPrevious = 1;
    let fibNext = 1;
    let fibsum = 0;

    if (times<1){
        return "OOPS";
    }
    if (times<3){
        return 1;
    }
    for (let i=2;i<times;i++){

        fibsum = fibPrevious+fibNext;
        fibPrevious = fibNext;
        fibNext = fibsum;
    }
    return fibsum;

};

// Do not edit below this line
module.exports = fibonacci;
