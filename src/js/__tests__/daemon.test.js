import { Daemon } from "../class/Daemon";

describe("Daemon class", () => {
  test("Правильно создаётся объект Daemon", () => {
    const daemon = new Daemon("Azazel");
    const correct = {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: "Azazel",
      type: "Daemon",
    };
    expect(daemon).toEqual(correct);
  });
});
