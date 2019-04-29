var Fizzbuzz = function(){};

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor){
  return (number % divisor === 0)
};

Fizzbuzz.prototype.isDivisibleByTHREE = function (number) {
  return this._isDivisibleBy(number, 3);
};

Fizzbuzz.prototype.isDivisibleByFIVE = function (number) {
  return this._isDivisibleBy(number, 5);
};

Fizzbuzz.prototype.isDivisibleByFIFTEEN = function (number) {
  return this._isDivisibleBy(number, 15);
};

Fizzbuzz.prototype.says = function(number) {
  if (this.isDivisibleByTHREE(number)) {
    return "Fizz";
  }
  if (this.isDivisibleByFIVE(number)) {
    return "Buzz";
  }
  if (this.isDivisibleByFIFTEEN(number)) {
     return "Fizzbuzz";
  }
  return number;
};
