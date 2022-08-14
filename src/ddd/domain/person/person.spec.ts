import { AgeVO } from './age-vo';
import { NameVO } from './name-vo';
import { Person } from './person';

describe('name-vo', () => {
  it('インスタンスを生成', () => {
    const nameVO = NameVO.create('taro');
    const ageVO = AgeVO.create('8');

    if (!nameVO || !ageVO) {
      return;
    }

    expect(new Person(nameVO, ageVO)).toBeInstanceOf(Person);
  });
});
