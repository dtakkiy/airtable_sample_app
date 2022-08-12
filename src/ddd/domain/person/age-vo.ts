export class AgeVO {
  constructor(private readonly age: string) {
    this.isValidate(age);
    this.age = age;
  }

  private isValidate(age: string) {
    const MIN_VALUE = 0;
    const MAX_VALUE = 300;

    if (typeof age === 'undefined') return false;
    if (!age) return false;
    if (Number(age) < MIN_VALUE) return false;
    if (Number(age) > MAX_VALUE) return false;

    return true;
  }

  public get value() {
    return this.age;
  }
}
