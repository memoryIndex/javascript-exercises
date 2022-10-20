const ftoc = function(temp) {
    temp = temp-32;
    temp = temp/1.8;
    return Math.round(temp*10)/10;
};

const ctof = function(temp) {
    temp = temp * 1.8;
    temp = temp +32;
    return Math.round(temp*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
