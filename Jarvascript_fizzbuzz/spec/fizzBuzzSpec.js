describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFIVE(5)).toBe(true);

  });

  it('divisible by 3 and 5', function() {
    expect(fizzbuzz.isDivisibleByTHREEandFIVE(15)).toBe(true);
});
});

  describe ('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
  });

  it('divisible by 5', function() {
    expect(fizzbuzz.isDivisibleByFIVE(1)).toBe(false);
 });

 it('divisible by 3 and 5', function() {
   expect(fizzbuzz.isDivisibleByTHREEandFIVE(1)).toBe(false);

});
});
});
