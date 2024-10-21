import { addAll } from './utils';

describe('utils', () => {
  test('should addAll numbers', () => {
    expect(addAll([1, 2, 3])).toEqual(6);
  });
});
