import { IPersonQueryService } from './query-service-interface/person-query-service';

export class GetPersonsUseCase {
  constructor(private readonly personQueryService: IPersonQueryService) {}

  public async execute() {
    try {
      return await this.personQueryService.getAll();
    } catch (e) {
      throw e;
    }
  }
}
