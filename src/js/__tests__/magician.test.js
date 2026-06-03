import { Magician } from "../class/Magician";

describe("Magician class", () => {
  test("Правильно создаётся объект Magician", () => {
    const magician = new Magician("Gandalf");
    const correct = {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: "Gandalf",
      type: "Magician",
    };
    expect(magician).toEqual(correct);
  });
});
