import { AgeVO } from './age-vo';
import { NameVO } from './name-vo';

export class Person {
  constructor(private readonly name: NameVO, private readonly age: AgeVO) {}

  getName = () => {
    this.name.getValue();
  };

  getAge = () => {
    this.age.getValue();
  };
}
