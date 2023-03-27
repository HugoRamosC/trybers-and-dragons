import IFighter from '../Fighter';
import ISimpleFighter from '../Fighter/SimpleFighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  protected _fighter: IFighter;
  protected _monsters: (Monster | IFighter | ISimpleFighter)[];
  constructor(
    fighter: IFighter,
    monsters: (Monster | IFighter | ISimpleFighter)[],
  ) {
    super(fighter);
    this._fighter = fighter;
    this._monsters = monsters;
    this.fight();
  }
}

fight() {
  const firstMonsterAlive = this._monsters.find((m) => m.lifePoints !== -1);
  const anyMonsterAlive = this._monsters.some((m) => m.lifePoints !== -1);
  const fighterAlive = this._fighter.lifePoints !== -1;
  while (fighterAlive && anyMonsterAlive) {
    this._fighter.attack(firstMonsterAlive);
    this._monsters.forEach((m) => {
      if (m.lifePoints !== -1) m.attack(this._fighter);
    });
    return super.fight();
  }
}