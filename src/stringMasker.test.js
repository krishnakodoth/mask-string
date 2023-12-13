const maskString = require("./stringMasker");

describe("'maskString' validation and functionality", () => {  
  test("maskString function call should throw TypeError in case of no argumnent", () => {
    expect(() => {
      maskString();
    }).toThrow(TypeError);
  });
  test("maskString function call should throw TypeError in case of empty input", () => {
    expect(()=>maskString('')).toThrow(TypeError);
  });
  test("maskString function should throw TypeError in case of undefined input", () => {
    expect(()=>maskString(undefined)).toThrow(TypeError);
  });
  test("maskString function should throw TypeError in case of null input", () => {
    expect(()=>maskString(null)).toThrow(TypeError);
  });
  test("maskString function should return same input string if it does not have @", () => {
    expect(maskString('example_domain.com')).toBe('example_domain.com');
  });
  test("maskString function should return same input string if it has only @", () => {
    expect(maskString('@')).toBe('@');
  });
  
  test("maskString function should accept string as input", () => {
    expect(maskString('example@domain.com')).toBe('exa****@domain.com');
  });
  test("maskString function should retrun masked string with same length as input", () => {
    expect(maskString('example@domain.com')).toHaveLength("example@domain.com".length);
    expect(maskString('example@domain.com')).toContain("*");
  });

  test("maskString function should accept array as input", () => {
    expect(maskString([])).toStrictEqual([])
  });
  test("maskString function should return an array with same length as input array", () => {
    expect(maskString(["a",'b','c'])).toStrictEqual(["a",'b','c']);
    expect(maskString(["a",'b','c'])).toHaveLength(["a",'b','c'].length)
  });
  test("maskString function should work as expected", () => {
    expect(maskString(['example@domain.com','krishnanova@gmail.com','@.com'])).toStrictEqual(['exa****@domain.com','kris*******@gmail.com','@.com']);
  });
  
});

/*
describe("Add Number functionality", () => {
  test("Sum of 2 and 3 should be 5", () => {
    expect(maskString(/*2, 3)).toBe(5);
  });
  test("Sum of 2 and 3 should not be 10", () => {
    expect(maskString(2, 3)).not.toBe(10);
  });/*
  test("Sum of a and b should throw an error", () => {
    expect(() => {
      maskString("a", "b");
    }).toThrow("Unexpected input type !");
  });
/*
  test("Sum of a and b should throw an error", () => {
    expect(() => {
      maskString("a", "b");
    }).toThrow(TypeError);
  });
});
/*
describe('something else',()=>{
  test("Sum of 2 and 3 should be 5", () => {
    expect(maskString(1,2)).toBe(3);
  });
})
*/
