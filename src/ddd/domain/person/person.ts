import { generator_id } from '@/utils/identifier';
import { AgeVO } from './age-vo';
import { NameVO } from './name-vo';

export class Person {
  private readonly id: string;

  constructor(private readonly name: NameVO, private readonly age: AgeVO) {
    this.id = generator_id();
    this.name = name;
    this.age = age;
  }

  public getAllProperties() {
    return {
      id: this.id,
      name: this.name.value,
      age: this.age.value,
    };
  }

  public getID = () => {
    return this.id;
  };

  public getName = () => {
    this.name.value;
  };

  public getAge = () => {
    this.age.value;
  };

  public isSamePerson = (person: Person) => {
    return person.getID() === this.getID();
  };
}
