import { Bowman } from "../class/Bowman";

describe("Bowman class", () => {
  test("Правильно создаётся объект Bowman", () => {
    const bowman = new Bowman("Legolas");
    const correct = {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: "Legolas",
      type: "Bowman",
    };
    expect(bowman).toEqual(correct);
  });
});
