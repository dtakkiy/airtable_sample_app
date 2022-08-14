export class PersonDTO {
  public readonly id: string;
  public readonly name: string;
  public readonly age: string;

  constructor(props: { id: string; name: string; age: string }) {
    this.id = props.id;
    this.name = props.name;
    this.age = props.age;
  }
}

export interface IPersonQueryService {
  getAll(): Promise<PersonDTO[]>;
}
