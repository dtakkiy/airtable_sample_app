import { Person } from '../person/person';

export interface IPersonRepository {
  create(person: Person): Promise<Person>;
}
