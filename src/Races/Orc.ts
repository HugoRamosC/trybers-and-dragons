import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _InstancesCount = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.addRace();
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
    return Orc._InstancesCount;
  }

  static addRace(): void {
    Orc._InstancesCount += 1;
  }
}