import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.addArchetype();
  }
  
  static createdArchetypeInstances() {
    return Ranger._archetypeCount;
  }

  static addArchetype(): void {
    Ranger._archetypeCount += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}