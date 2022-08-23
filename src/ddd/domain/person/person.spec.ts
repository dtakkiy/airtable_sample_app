import { AgeVO } from './age-vo';
import { NameVO } from './name-vo';
import { Person } from './person';

describe('name-vo', () => {
  let nameVO1: NameVO | null;
  let ageVO1: AgeVO | null;
  let name: string = 'noah';
  let age: string = '12';

  beforeAll(() => {
    nameVO1 = NameVO.create(name);
    ageVO1 = AgeVO.create(age);
  });

  it('インスタンスを生成', () => {
    const nameVO = NameVO.create('taro');
    const ageVO = AgeVO.create('8');

    if (!nameVO || !ageVO) {
      return;
    }

    expect(new Person(nameVO, ageVO)).toBeInstanceOf(Person);
  });
});
