var Fizzbuzz = function(){};
Fizzbuzz.prototype.isDivisibleByThree = function (number) {
  return (number % 3 === 0);
};

Fizzbuzz.prototype.isDivisibleByFIVE = function (number) {
  return (number % 5 === 0);
};

Fizzbuzz.prototype.isDivisibleByTHREEandFIVE = function (number) {
  return (number % 15 === 0);
};
