import helloSum from '../src/index'

test('index', () => {
  expect(helloSum(1, 2)).toBe('Hello 3')
})
