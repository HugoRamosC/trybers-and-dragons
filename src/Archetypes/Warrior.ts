import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.addArchetype();
  }
  
  static createdArchetypeInstances() {
    return Warrior._archetypeCount;
  }

  static addArchetype(): void {
    Warrior._archetypeCount += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}