var sum = function sum(a, b) {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export { sum };
//# sourceMappingURL=libscurd.esm.js.map
