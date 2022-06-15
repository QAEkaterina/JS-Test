const countSmileys = require('./smileys')

test("Valid smileys should return 4", () => {
  expect(countSmileys([':D',':~)',';~D',':)'])).toBe(4);
});

test("Valid smileys should return 0", () => {
    expect(countSmileys([';(',':>',':}',':]'])).toBe(0);
  }); 

  test("Valid smileys should return 1", () => {
    expect(countSmileys([';(',':>',':D',':]'])).toBe(1);
  });

  test("Valid smileys should return 2", () => {
    expect(countSmileys([':D',';(',':]',':)'])).toBe(2);
  }); 

  test("Valid smileys should return 3", () => {
    expect(countSmileys([':}',':~)',';~D',':)'])).toBe(3);
  });





