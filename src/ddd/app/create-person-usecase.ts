import { Failure, Result, Success } from '@/types/result';
import { AgeVO } from '../domain/person/age-vo';
import { NameVO } from '../domain/person/name-vo';
import { Person } from '../domain/person/person';
import { IPersonRepository } from '../domain/repository-interface/person-repository-interface';

interface Props {
  name: string;
  age: string;
}

export type QueryErrorCode = 'unexpected' | 'has_error_field';
export type QueryError = { code: QueryErrorCode; payload?: any };

export class CreatePersonUseCase {
  constructor(private readonly repository: IPersonRepository) {}

  public async execute(props: Props): Promise<Result<Person, QueryError>> {
    const { name, age } = props;

    const nameVO = NameVO.create(name);
    if (nameVO === null) {
      return new Failure({
        code: 'unexpected',
        payload: 'failed create nameVO',
      });
    }

    const ageVO = AgeVO.create(age);
    if (ageVO === null) {
      return new Failure({
        code: 'unexpected',
        payload: 'failed create ageVO',
      });
    }

    const person = new Person(nameVO, ageVO);
    try {
      await this.repository.create(person);
    } catch (error) {
      return new Failure({
        code: 'unexpected',
        payload: `${error}`,
      });
    }

    return new Success(person);
  }
}
