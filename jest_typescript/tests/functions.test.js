import { double, concat } from '../functions';

describe('testing index file', () => {
  test('double function', () => {
    expect(double(5)).toBe(9);
  });

  test('concat function', () => {
    expect(concat('John', ' ', 'Wick')).toBe('John Wic');
  });
});
