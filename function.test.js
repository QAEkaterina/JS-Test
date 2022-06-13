const findMissing = require('./function')

test("Should return 2 for [1,3] ", () => {
    expect(findMissing([1,3])).toBe(2);
});

test("Should return 2 for [5, 4, 3, 1] ", () => {
    expect(findMissing([5, 4, 3, 1])).toBe(2);
});

test("Should return 2 for [4, 1, 3, 5] ", () => {
    expect(findMissing([4, 1, 3, 5])).toBe(2);
});

test("Should return 24 for [23, 25, 26, 27]", () => {
    expect(findMissing([23, 25, 26, 27])).toBe(24);
});

test("Should return -3 for  [-1, -2, -4]", () => {
    expect(findMissing([-1, -2, -4])).toBe(-3);
});

test("Should return 0 for  [-1, 1]", () => {
    expect(findMissing([-1, 1])).toBe(0);
});