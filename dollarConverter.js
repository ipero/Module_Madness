var convertToDollar = function (number, currency) {
    return currency  + number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
};

module.exports = convertToDollar;
