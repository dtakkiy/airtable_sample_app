import { AgeVO } from '../domain/person/age-vo';
import { NameVO } from '../domain/person/name-vo';
import { Person } from '../domain/person/person';
import { IPersonRepository } from '../domain/repository-interface/person-repository-interface';

interface Props {
  name: string;
  age: string;
}

export class CreatePersonUseCase {
  constructor(private readonly repository: IPersonRepository) {}

  public async execute(props: Props): Promise<Person> {
    const { name, age } = props;

    const nameVO = NameVO.create(name);
    if (nameVO === null) {
      throw new Error('failed create nameVO.');
    }

    const ageVO = AgeVO.create(age);
    if (ageVO === null) {
      throw new Error('failed create ageVO.');
    }

    const person = new Person(nameVO, ageVO);

    await this.repository.create(person);

    return person;
  }
}
