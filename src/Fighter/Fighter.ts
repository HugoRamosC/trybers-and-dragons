import IEnergy from '../Energy';
import ISimpleFighter from './SimpleFighter';

export default interface IFighter extends ISimpleFighter {
  defense: number;
  energy?: IEnergy;
  level?: number;
  special?(enemy: IFighter): void;
  levelUp(): void;
}