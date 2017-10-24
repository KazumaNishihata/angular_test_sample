import { Test01Pipe } from './test01.pipe';

describe('Test01Pipe', () => {

  let pipe;
  const text19 = 'あいうえおかきくけこあいうえおかきくけ';
  const text49 = 'あいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけ';

  beforeEach(() => {
    pipe = new Test01Pipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('49文字では変換されない', () => {
    expect(pipe.transform(text49)).toEqual(text49);
  });

  it('50文字では変換される', () => {
    expect(pipe.transform(text49 + 'こ')).toEqual(text49 + '...');
  });

  it('20文字指定をすると20文字で変換される', () => {
    expect(pipe.transform(text19  + 'こ', 20)).toEqual(text19 + '...');
  });

  it('... を 〜 など別の文字列に変換できる', () => {
    expect(pipe.transform(text19  + 'こ', 20, '〜')).toEqual(text19 + '〜');
  });
});
