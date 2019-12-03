function getNumberish(y) {
  return n => {
    let ishNumbers = [];

    for (let power = 0; ishNumbers.length < n; power++) {
      const num = Math.pow(y, power);
      const sums = [num];
      for (let oldNum of ishNumbers) {
        if (ishNumbers.length + sums.length === n) {
          return sums[sums.length - 1];
        }
        sums.push(num + oldNum);
      }
      ishNumbers.push(...sums);
    }

    return ishNumbers[ishNumbers.length - 1];
  };
}

module.exports = {
  getNumberish
};
