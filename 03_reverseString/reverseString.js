const reverseString = function(text) {
    outputText = '';
    endIndex = text.length;
    for(let i=0;i<=text.length;i++){
        currentLetter = text.charAt(endIndex);
        outputText += currentLetter;
        endIndex--;
    }
    return outputText;
};

// Do not edit below this line
module.exports = reverseString;
