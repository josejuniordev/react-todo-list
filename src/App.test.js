function teste() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('jose');
    }, 3000);

    setTimeout(() => {
      reject('error');
    }, 2000);
  })
}

test('async test', async () => {
  expect(teste()).rejects.toThrow('error')
});
