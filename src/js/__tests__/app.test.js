import {
  Character,
  Bowman,
  Daemon,
  Magician,
  Swordsman,
  Undead,
  Zombie,
} from "../app";

describe("Character валидация", () => {
  test("корректное создание", () => {
    const char = new Character("Alex", "Bowman", 30, 20);
    expect(char.name).toBe("Alex");
  });

  test("ошибка при коротком имени", () => {
    expect(() => new Character("A", "Bowman", 10, 10)).toThrow();
  });

  test("ошибка при длинном имени", () => {
    expect(() => new Character("VeryLongName", "Bowman", 10, 10)).toThrow();
  });

  test("ошибка при невалидном типе", () => {
    expect(() => new Character("Alex", "Paladin", 10, 10)).toThrow();
  });
});

describe("Классы-наследники", () => {
  test("Bowman должен иметь правильные атаку и защиту", () => {
    const bowman = new Bowman();
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
    expect(bowman.type).toBe("Bowman");
  });

  test("Swordsman должен иметь правильные атаку и защиту", () => {
    const swordsman = new Swordsman();
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
    expect(swordsman.type).toBe("Swordsman");
  });

  test("Magician должен иметь правильные атаку и защиту", () => {
    const magician = new Magician();
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
    expect(magician.type).toBe("Magician");
  });

  test("Undead должен иметь правильные атаку и защиту", () => {
    const undead = new Undead();
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
    expect(undead.type).toBe("Undead");
  });

  test("Zombie должен иметь правильные атаку и защиту", () => {
    const zombie = new Zombie();
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
    expect(zombie.type).toBe("Zombie");
  });

  test("Daemon должен иметь правильные атаку и защиту", () => {
    const daemon = new Daemon();
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
    expect(daemon.type).toBe("Daemon");
  });
});
