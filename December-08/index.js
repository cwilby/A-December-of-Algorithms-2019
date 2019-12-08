const getStudent = (matrix, x, y) => matrix[x] ? matrix[x][y] : null;

module.exports = matrix =>
  matrix.map((row, i) =>
    row.map((department, j) =>
      [
        { condition: getStudent(matrix, i - 1, j) === department, value: 0.3 },
        {
          condition: [getStudent(matrix, i + 1, j), row[j - 1], row[j + 1]].includes(
            department
          ),
          value: 0.2
        },
        {
          condition: [
            [i + 1, j + 1],
            [i - 1, j + 1],
            [i - 1, j - 1],
            [i + 1, j - 1]
          ].map(([x, y]) => getStudent(matrix, x, y)).includes(department),
          value: 0.025
        }
      ].reduce(
        (agg, { condition, value }) => (condition ? agg + value : agg),
        0
      )
    )
  );
