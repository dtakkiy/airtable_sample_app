import {
  IPersonQueryService,
  PersonDTO,
} from '@/ddd/app/query-service-interface/person-query-service';
import { Fields } from '@/types/data';

export class PersonQueryService implements IPersonQueryService {
  constructor(private readonly table: any) {}

  public async getAll(): Promise<PersonDTO[]> {
    const MAX_RECORD = 100;

    const records = await this.table
      .select({
        maxRecords: MAX_RECORD,
        sort: [
          { field: 'name', direction: 'asc' },
          { field: 'age', direction: 'asc' },
        ],
      })
      .firstPage();

    return records.map((record: Fields) => {
      return new PersonDTO({
        name: record.fields.name,
        age: record.fields.age,
      });
    });
  }
}
