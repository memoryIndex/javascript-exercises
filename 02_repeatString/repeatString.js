const repeatString = function (text,times) {
    outputText = '';

    if (times<0){
        outputText='ERROR';
    }
    for (let i=0;i<times;i++){
        outputText += text;
    }
    return outputText;
};

// Do not edit below this line
module.exports = repeatString;
