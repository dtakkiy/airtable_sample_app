import { AgeVO } from 'ddd/domain/person/age-vo';
import { NameVO } from 'ddd/domain/person/name-vo';
import { Person } from 'ddd/domain/person/person';
import { IPersonRepository } from 'ddd/domain/repository-interface/person-repository-interface';

interface Props {
  name: string;
  age: string;
}

export class CreatePersonUseCase {
  constructor(private readonly repository: IPersonRepository) {}

  public async execute(props: Props): Promise<Person> {
    const { name, age } = props;

    const nameVO = new NameVO(name);
    const ageVO = new AgeVO(age);
    const person = new Person(nameVO, ageVO);

    await this.repository.create(person);

    return person;
  }
}
