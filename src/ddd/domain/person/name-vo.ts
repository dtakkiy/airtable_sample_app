export class NameVO {
  constructor(private readonly name: string) {
    this.isValidate(name);
    this.name = name;
  }

  private isValidate(name: string) {
    const MAX_LENGTH = 255;

    if (typeof name === 'undefined') return false;
    if (!name) return false;
    if (name.length > MAX_LENGTH) return false;

    return true;
  }

  public get value() {
    return this.name;
  }
}
