export class PersonDTO {
  public readonly name: string;
  public readonly age: string;

  constructor(props: { name: string; age: string }) {
    this.name = props.name;
    this.age = props.age;
  }
}

export interface IPersonQueryService {
  getAll(): Promise<PersonDTO[]>;
}
