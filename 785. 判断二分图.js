/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const color = new Array(graph.length).fill(0);
  function dfs(i) {
    let result = true;
    const target = color[i] === 1 ? 2 : 1;
    for (const p of graph[i]) {
      if (color[p]) {
        if (color[p] !== target) {
          return false;
        }
      } else {
        color[p] = target;
        if (!dfs(p)) {
          result = false;
        }
      }
    }
    return result;
  }

  let result = true;
  for (let i = 0; i < graph.length; i++) {
    if (graph[i].length && color[i] === 0) {
      color[i] = 1;
      if (!dfs(i)) {
        result = false;
      }
    }
  }
  return result;
};
