const isPrime = n => {
  for(let i = 2, s = Math.sqrt(n); i <= s; i++)
    if(n % i === 0) return false;
  return n > 1;
}

module.exports = n => {
  const primeFibs = [];
  let a = 1, b = 0, temp = 0;
  while (primeFibs.length < n) {
    temp = a;
    a = a + b;
    b = temp;
    if (isPrime(a)) {
      primeFibs.push(a);
    }
  }
  return primeFibs;
}