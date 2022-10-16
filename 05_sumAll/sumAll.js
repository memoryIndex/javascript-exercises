const sumAll = function(start,end) {
    let sum = 0;
    let i,j;

    if (typeof(start) != 'number' || typeof(end) != 'number'){
        return 'ERROR';
    }

    if (start<0 || end<0){
        return 'ERROR';
    }

    if (start>end){
        j = start;
        i = end;
    }else{
        i = start;
        j = end;
    }
    for(;i<=j;i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
