let alphabets = ['A','B','C','D','E','F',
                'G','H','I','J','K','L',
                'M','N','O','P','Q','R',
                'S','T','U','V','W','X','Y','Z'];


const caesar = function(inputText,shift) {

    let finalString = '';
    for (let i=0;i<inputText.length;i++){
        if(isPunctution(inputText[i])){
            finalString+=inputText[i];
            continue;
        }
        isCapital = isCaps(inputText[i]);        
        tempIndex = currentIndex(inputText[i]);
        shiftedLetter = shiftedIndex(tempIndex, shift);

        if (isCapital === true){
            finalString += shiftedLetter.toUpperCase();
        }else{
            finalString += shiftedLetter.toLowerCase();
        }
        
    }
    return finalString;
    
    
};

function isPunctution(text){
    let regEx = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let regExSpace = /^\s*$/;
    testPunc = regEx.test(text);
    testSpace = regExSpace.test(text);
    if (testPunc){
        return true;
    }else if (testSpace){
        return true;
    }
}

function isCaps(text){
    if (text.toUpperCase() == text){
        return true;
    }else if (text.toLowerCase() == text){
        return false;
    }
}

function currentIndex(i){
    let currentIndex = alphabets.indexOf(i.toUpperCase());
    return currentIndex;
}

function shiftedIndex(tempIndex, shift){
    let shiftedIndex = tempIndex + shift;
    while(shiftedIndex<0 || shiftedIndex > 25){
    if(shiftedIndex>25){
        shiftedIndex = shiftedIndex-26;
    }else if(shiftedIndex<0){
        shiftedIndex = 26+shiftedIndex;
    }
}
    return alphabets[shiftedIndex];
}

// Do not edit below this line
module.exports = caesar;
