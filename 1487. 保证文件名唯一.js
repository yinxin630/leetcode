/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  const result = [];
  const map = {};
  for (const name of names) {
    if (map[name]) {
      do {
        const renamed = name + `(${map[name]})`;
        if (!map[renamed]) {
          map[renamed] = 1;
          result.push(renamed);
          break;
        }
        map[name]++;
      } while (true);
    } else {
      map[name] = 1;
      result.push(name);
    }
  }
  return result;
};
