const getTheTitles = function(books) {
    let array = [];

    for (let items of books){
        array.push(items.title);
    }

    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
