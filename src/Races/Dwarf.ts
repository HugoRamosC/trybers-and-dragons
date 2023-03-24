import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _InstancesCount = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.addRace();
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
    return Dwarf._InstancesCount;
  }

  static addRace(): void {
    Dwarf._InstancesCount += 1;
  }
}