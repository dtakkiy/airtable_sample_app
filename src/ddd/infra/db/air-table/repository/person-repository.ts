import { Person } from 'ddd/domain/person/person';
import { IPersonRepository } from 'ddd/domain/repository-interface/person-repository-interface';

export class PersonRepository implements IPersonRepository {
  constructor(private readonly table: any) {}

  public create = async (person: Person): Promise<Person> => {
    const { name, age } = person.getAllProperties();

    const data = [
      {
        fields: {
          age: age,
          name: name,
        },
      },
    ];

    try {
      await this.table.create(data);
    } catch (e) {
      throw e;
    }

    return person;
  };
}
