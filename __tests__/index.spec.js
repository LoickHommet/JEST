const { boolean } = require("yargs");
const absolue = require("../index");

describe("La fonction absolue", function () {

    beforeEach(()=>{})
    afterEach(()=>{})
    beforeAll(()=>{})
    afterAll(()=>{})

  test("absolue - doit retourner 0 si on lui passe 0", () => {
    const result = absolue(0);
    expect(result).toBe(0);
  });

  test("absolue - doit retourner 1 si on lui passe -1", () => {
    const result = absolue(-1);
    expect(result).toBe(1);
  });

  test("absolue - doit retourner 1 si on lui passe 1", () => {
    const result = absolue(1);
    expect(result).toBe(1);
  });

  test("absolue - doit retourner infinity si on lui passe infinity", () => {
    const result = absolue(Infinity);
    expect(result).toBe(Infinity);
  });
  test("absolue - doit retourner infinity si on lui passe -infinity", () => {
    const result = absolue(-Infinity);
    expect(result).toBe(Infinity);
  });

  test("absolue - doit retourner NaN si on lui passe NaN", () => {
    const result = absolue(NaN);
    expect(result).toBe(NaN);
  });

  test.each([undefined, "zzz", "", " ", [], [1], {}, { id: 1 }, boolean])(
    "absolue - doit rejter ce qui n'est pas un nombre, ici %p",
    (a) => {
      expect(() => {
        absolue(a);
      }).toThrow(/nombre/);
    }
  );
});
