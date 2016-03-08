var value = require('./randomNum.js');
var dollars = require('./dollarConverter.js');
var myBalance = function(){
  return dollars(value(100, 1000000), "$");
};

var message = function () {
  return "Account balance: \n";
};


module.exports = {
  myBalance: myBalance,
  message: message
};
