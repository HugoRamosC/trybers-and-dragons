import Character from '../Character';
import IFighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  protected _player1: Character | IFighter;
  protected _player2: Character | IFighter;
  constructor(player1: Character | IFighter, player2: Character | IFighter) {
    super(player1);
    this._player1 = player1;
    // this._player1.level = player1.level || player1.strength;
    this._player2 = player2;
    // this._player2.level = player2.level || player2.strength;
    this.fight();
  }

  PVPAttack(first: Character | IFighter, second: Character | IFighter) {
    while (first.lifePoints !== -1 && second.lifePoints !== -1) {
      first.attack(second);
      second.attack(first);
    }
    return super.fight();
  }

  fight() {
    return (this._player1.level || 1) > (this._player2.level || 1)
    // return this._player1.strength > this._player2.strength
      ? this.PVPAttack(this._player1, this._player2)
      : this.PVPAttack(this._player2, this._player1);
  }
}
