import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.addArchetype();
  }
  
  static createdArchetypeInstances() {
    return Mage._archetypeCount;
  }

  static addArchetype(): void {
    Mage._archetypeCount += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}