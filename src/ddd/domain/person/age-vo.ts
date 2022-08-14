export class AgeVO {
  private constructor(private readonly age: string) {
    if (!this.isValidate(age)) {
      throw new Error('input age invalid.');
    }
    this.age = age;
  }

  public static create(age: string): AgeVO | null {
    try {
      return new AgeVO(age);
    } catch (e) {
      return null;
    }
  }

  private isValidate(age: string) {
    const MIN_VALUE = 0;
    const MAX_VALUE = 300;

    if (typeof age === 'undefined') return false;
    if (!age) return false;
    if (age === '') return false;
    if (Number(age) < MIN_VALUE) return false;
    if (Number(age) > MAX_VALUE) return false;

    return true;
  }

  public get value() {
    return this.age;
  }
}
