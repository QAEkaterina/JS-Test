const Hello = require('./hello');

test("Function should return Hello world", () => {
    expect(Hello('world')).toBe('Hello world!');
});

test("Function should not return Hello world", () => {
    expect(Hello('friend')).not.toBe('Hello world!');
});

test("Function should return undefined for numbers", () => {
    expect(Hello(5)).toBe(undefined);
});

test("Function should return Hello for empty input", () => {
    expect(Hello()).toBe('Hello!');
    expect(Hello("")).toBe("Hello!");
    expect(Hello(" ")).toBe("Hello!");
});


