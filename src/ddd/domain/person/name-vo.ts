export class NameVO {
  private constructor(private readonly name: string) {
    if (!this.isValidate(name)) {
      throw new Error('input name invalid.');
    }
    this.name = name;
  }

  public static create(name: string): NameVO | null {
    try {
      return new NameVO(name);
    } catch (e) {
      return null;
    }
  }

  private isValidate(name: string) {
    const MAX_LENGTH = 255;

    if (typeof name === 'undefined') return false;
    if (!name) return false;
    if (name === '') return false;
    if (name.length > MAX_LENGTH) return false;

    return true;
  }

  public get value() {
    return this.name;
  }
}
