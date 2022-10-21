const solution = require('./weakNumbers.js');

test('test 1', () => {
    expect(solution(9)).toEqual([2, 2]);
});

test('test 2', () => {
    expect(solution(1)).toEqual([0, 1]);
});

test('test 3', () => {
    expect(solution(2)).toEqual([0, 2]);
});

test('test 4', () => {
    expect(solution(7)).toEqual([2, 1]);
});

test('test 5', () => {
    expect(solution(500)).toEqual([403, 1]);
});

test('test 6', () => {
    expect(solution(4)).toEqual([0, 4]);
});
