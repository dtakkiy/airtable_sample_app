import { Person } from '../../domain/person/person';

export interface IPersonRepository {
  create(person: Person): Promise<Person>;
}
