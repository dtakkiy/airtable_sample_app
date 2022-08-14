import { NameVO } from './name-vo';

describe('name-vo', () => {
  it('インスタンスを生成', () => {
    const nameVO = NameVO.create('taro');
    expect(nameVO).toBeInstanceOf(NameVO);
  });

  it('空白の場合', () => {
    expect(NameVO.create('')).toBeNull();
  });

  it('256文字', () => {
    const name = Array(257)
      .map((s) => s)
      .join('');
    expect(NameVO.create(name)).toBeNull();
  });
});
