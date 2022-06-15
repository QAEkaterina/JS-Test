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

  test("Valid smileys should return 0", () => {
    expect(countSmileys([])).toBe(0);
  });

  test("Valid smileys should return 0", () => {
    expect(countSmileys(['(◕‿◕)', 'o(^▽^)o'])).toBe(0);
  });

  test("Valid smileys should return 0", () => {
    expect(countSmileys([':3', ':8', '=D', '<3'])).toBe(0);
  });

  test("Valid smileys should return 6", () => {
    expect(countSmileys([':~D',':~)',';~D',':~)',':-)',';-D'])).toBe(6);
  });

  test("Valid smileys should return 0", () => {
    expect(countSmileys([8])).toBe(0);
  });
