import { Swordsman } from "../class/Swordsman";

describe("Swordsman class", () => {
  test("Правильно создаётся объект Swordsman", () => {
    const swordsman = new Swordsman("Aragorn");
    const correct = {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: "Aragorn",
      type: "Swordsman",
    };
    expect(swordsman).toEqual(correct);
  });
});
