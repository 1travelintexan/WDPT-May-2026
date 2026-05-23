describe("Capital First Letter Test", () => {
  //test that it exist and is a function
  it("should be defined as a function", () => {
    expect(typeof capitalFirstLetter).toBe("function");
  });
  //test that it returns a capital first letter with given a string
  it("should return a string with the first letter capitalized", () => {
    expect(capitalFirstLetter("ragnar")).toBe("Ragnar");
    expect(capitalFirstLetter("daisy")).toBe("Daisy");
    expect(capitalFirstLetter("paris")).toBe("Paris");
  });
  //test that is will lowercase all other letters after the first letter
  it("should return a string with only the first letter capitalized and the others", () => {
    expect(capitalFirstLetter("JOSHUA")).toBe("Joshua");
    expect(capitalFirstLetter("mIgUeL")).toBe("Miguel");
    expect(capitalFirstLetter("pORTUGAL")).toBe("Portugal");
  });
  //test that will check if given undefined or a number
  it("should return the string NOT VALID if given incorrect parameters", () => {
    expect(capitalFirstLetter()).toBe("NOT VALID");
    expect(capitalFirstLetter(200)).toBe("NOT VALID");
  });
});
