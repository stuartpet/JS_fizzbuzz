describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByTHREE(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFIVE(5)).toBe(true);

  });

  it('divisible by 3 and 5', function() {
    expect(fizzbuzz.isDivisibleByFIFTEEN(15)).toBe(true);
});
});

  describe ('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByTHREE(1)).toBe(false);
  });

  it('divisible by 5', function() {
    expect(fizzbuzz.isDivisibleByFIVE(1)).toBe(false);
 });

 it('divisible by 3 and 5', function() {
   expect(fizzbuzz.isDivisibleByFIFTEEN(1)).toBe(false);

});
});

describe('when playing, says', function() {

  it('"Fizz" when a number is divisible by 15', function() {
    expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
  });

  it('"Buzz" when a number is divisible by 5', function() {
    expect(fizzbuzz.says(5)).toEqual("Buzz");
});

it('"Fizzbuzz" when a number is divisible by 15', function() {
  expect(fizzbuzz.says(3)).toEqual("Fizz");
});
});
});
