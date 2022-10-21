const palindromes = function (text) {
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    text = text.replace(/ /g, "");
    text = text.toLowerCase();
    let end = text.length-1;

    for (let start=0;start<end; start++){
    let textstart = text[start];
    let textend = text[end];

        if (textstart === textend){
            end--;
            continue;
        }else{
            return false;
        }
    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
