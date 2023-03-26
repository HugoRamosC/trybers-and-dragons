import IEnergy from '../Energy';
import ISimpleFighter from './SimpleFighter';

export default interface IFighter extends ISimpleFighter {
  // lifePoints: number;
  // strength: number;
  defense: number;
  energy?: IEnergy;
  level?: number;
  // attack(enemy: IFighter): void;
  special?(enemy: IFighter): void;
  levelUp(): void;
  // receiveDamage(attackPoints: number): number
}