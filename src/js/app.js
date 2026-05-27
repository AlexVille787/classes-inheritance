export class Character {
  constructor(name, type, attack, defence) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error("Имя должно быть строкой длиной от 2 до 10 символов");
    }
    const validTypes = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (!validTypes.includes(type)) {
      throw new Error(`Тип должен быть одним из: ${validTypes.join(", ")}`);
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}
export class Bowman extends Character {
  constructor() {
    super("warrior", "Bowman", 25, 25);
  }
}
export class Swordsman extends Character {
  constructor() {
    super("warrior", "Swordsman", 40, 10);
  }
}
export class Magician extends Character {
  constructor() {
    super("warrior", "Magician", 10, 40);
  }
}
export class Undead extends Character {
  constructor() {
    super("warrior", "Undead", 25, 25);
  }
}
export class Zombie extends Character {
  constructor() {
    super("warrior", "Zombie", 40, 10);
  }
}
export class Daemon extends Character {
  constructor() {
    super("warrior", "Daemon", 10, 40);
  }
}
