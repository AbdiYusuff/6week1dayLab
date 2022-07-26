const {returnTwo, greeting, add} = require('./functions');

test("checkfor2", () => expect(2).toBe(2));

test("Should Return Hell, Abdi", () => {
    expect(greeting("Abdi")).toBe("Hello, Abdi")});

test("Should return sum", () => { 
    expect(add(1, 2)).toBe(3)});
    

