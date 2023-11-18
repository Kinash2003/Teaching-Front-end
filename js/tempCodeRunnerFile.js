 const stringChecker = function (s, p1, p2) {
    if (p1.length + p2.length !== s.length) {
      return false;
  }

  const сhecker = Array.from({ length: p1.length + 1 }, () => Array(p2.length + 1).fill(false));

  for (let i = 0; i <= p1.length; i++) {
      for (let j = 0; j <= p2.length; j++) {
          if (i === 0 && j === 0) {
            сhecker[i][j] = true;
          } else if (i === 0) {
            сhecker[i][j] = сhecker[i][j - 1] && p2[j - 1] === s[i + j - 1];
          } else if (j === 0) {
            сhecker[i][j] = сhecker[i - 1][j] && p1[i - 1] === s[i + j - 1];
          } else {
            сhecker[i][j] = (сhecker[i][j - 1] && p2[j - 1] === s[i + j - 1]) || (сhecker[i - 1][j] && p1[i - 1] === s[i + j - 1]);
          }
      }
  }

  return сhecker[p1.length][p2.length];
};

console.log(stringChecker('radency', 'rdnc', 'aey'));