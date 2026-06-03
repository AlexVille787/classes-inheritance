import { Undead } from "../class/Undead";

describe("Undead class", () => {
  test("Правильно создаётся объект Undead", () => {
    const undead = new Undead("Nazgul");
    const correct = {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: "Nazgul",
      type: "Undead",
    };
    expect(undead).toEqual(correct);
  });
});
