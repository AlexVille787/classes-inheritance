import { Zombie } from "../class/Zombie";

describe("Zombie class", () => {
  test("Правильно создаётся объект Zombie", () => {
    const zombie = new Zombie("Walker");
    const correct = {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: "Walker",
      type: "Zombie",
    };
    expect(zombie).toEqual(correct);
  });
});
