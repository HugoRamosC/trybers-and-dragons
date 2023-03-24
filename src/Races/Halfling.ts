import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _InstancesCount = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.addRace();
  }

  // polimorfismo - override - sobreescrita
  get name(): string {
    return this.name;
  }
  
  get dexterity(): number {
    return this.dexterity;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Halfling._InstancesCount;
  }

  static addRace(): void {
    Halfling._InstancesCount += 1;
  }
}