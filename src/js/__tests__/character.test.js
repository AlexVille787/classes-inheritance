import { Character } from "../class/Character";

describe("Character class", () => {
  test("Правильно создаётся объект с корректным именем и типом", () => {
    const character = new Character("Hero", "Bowman");
    expect(character.name).toBe("Hero");
  });

  test("Выбрасывает ошибку при имени короче 2 символов", () => {
    expect(() => new Character("A", "Bowman")).toThrow(
      "Имя должно быть строкой длиной от 2 до 10 символов",
    );
  });

  test("Выбрасывает ошибку при имени длиннее 10 символов", () => {
    expect(() => new Character("VeryLongName", "Bowman")).toThrow(
      "Имя должно быть строкой длиной от 2 до 10 символов",
    );
  });

  test("Выбрасывает ошибку при некорректном типе", () => {
    expect(() => new Character("Hero", "InvalidType")).toThrow(
      "Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie",
    );
  });
});
