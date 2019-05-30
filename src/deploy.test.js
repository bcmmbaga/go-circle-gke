const deploy = require('./deploy');

test('helloDeploy() returns CD Pipeline working', () => {
  expect(deploy.helloDeploy()).toBe('CD Pipeline working');
});