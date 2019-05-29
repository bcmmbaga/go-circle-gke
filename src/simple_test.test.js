const tst = require('./simple_test');

test('helloKubernetes() returns Hello Kubernetes', () => {
  expect(tst.helloKubernetes()).toBe('Hello Kubernetes');
});