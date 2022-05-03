const absolue = require("../index");

test('absolue - doit retourner 0 si on lui passe 0', () => {
    const result = absolue(0);
    expect(result).toBe(0);
})

test('absolue - doit retourner 1 si on lui passe -1', () => {
   const result = absolue(-1)
   expect(result).toBe(1)
})

test("absolue - doit retourner 1 si on lui passe 1", () => {
    const result = absolue(1)
    expect(result).toBe(1)
})