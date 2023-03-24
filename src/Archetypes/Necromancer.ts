import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.addArchetype();
  }
  
  static createdArchetypeInstances() {
    return Necromancer._archetypeCount;
  }

  static addArchetype(): void {
    Necromancer._archetypeCount += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}