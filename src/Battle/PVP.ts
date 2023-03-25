import IFighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _playerWin: number;
  protected _player1: IFighter;
  protected _player2: IFighter;
  constructor(player1: IFighter, player2: IFighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
    this._playerWin = super.fight();
  }

  figth() {
    while (this._playerWin === 1) {
      this._player1.attack(this._player2);
      this._player2.receiveDamage(this._player1.strength);
      this._player2.attack(this._player1);
      this._player1.receiveDamage(this._player2.strength);
    }
  }
}