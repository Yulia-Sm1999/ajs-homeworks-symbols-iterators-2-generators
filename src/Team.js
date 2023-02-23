export default class Team {
  constructor() {
    this.team = [];
  }

  addCharacter(character) {
    if (Array.isArray(character)) {
      character.forEach((char) => this.team.push(char));
      return;
    }
    this.team.push(character);
  }

  * [Symbol.iterator]() {
    yield* this.team;
  }
}
