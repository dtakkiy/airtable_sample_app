import { Failure, Result, Success } from '@/types/result';
import {
  IPersonQueryService,
  PersonDTO,
} from './query-service-interface/person-query-service';

export type QueryErrorCode = 'unexpected';
export type QueryError = { code: QueryErrorCode; payload?: any };
export class GetPersonsUseCase {
  constructor(private readonly personQueryService: IPersonQueryService) {}

  public async execute(): Promise<Result<PersonDTO[], QueryError>> {
    try {
      const data = await this.personQueryService.getAll();
      return new Success(data);
    } catch (error) {
      return new Failure({ code: 'unexpected', payload: error });
    }
  }
}
