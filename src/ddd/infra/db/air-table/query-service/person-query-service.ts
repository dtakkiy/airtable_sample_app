import {
  IPersonQueryService,
  PersonDTO,
} from 'src/ddd/app/query-service-interface/person-query-service';
import { Fields } from 'src/types/data';

export class PersonQueryService implements IPersonQueryService {
  constructor(private readonly table: any) {}

  public async getAll(): Promise<PersonDTO[]> {
    const MAX_RECORD = 100;

    const records = await this.table
      .select({
        maxRecords: MAX_RECORD,
        sort: [
          { field: 'id', direction: 'asc' },
          { field: 'name', direction: 'asc' },
          { field: 'age', direction: 'asc' },
        ],
      })
      .firstPage();

    return records.map((record: Fields) => {
      return new PersonDTO({
        id: record.fields.id,
        name: record.fields.name,
        age: record.fields.age,
      });
    });
  }
}
