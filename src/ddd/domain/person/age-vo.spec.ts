import { AgeVO } from './age-vo';

describe('age-vo', () => {
  it('インスタンスを生成', () => {
    const ageVO = AgeVO.create('88');
    expect(ageVO).toBeInstanceOf(AgeVO);
  });

  it('空白の場合', () => {
    expect(AgeVO.create('')).toBeNull();
  });

  it('-1', () => {
    expect(AgeVO.create('-1')).toBeNull();
  });

  it('0', () => {
    expect(AgeVO.create('0')).toBeInstanceOf(AgeVO);
  });

  it('300', () => {
    expect(AgeVO.create('300')).toBeInstanceOf(AgeVO);
  });

  it('301', () => {
    expect(AgeVO.create('301')).toBeNull();
  });
});
