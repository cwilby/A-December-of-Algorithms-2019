const { EOL } = require('os');

module.exports = csv => `<html>
  <body>
    <table>
${csv.split(EOL).filter(x => x).map((row, i) => {
  const el = i ? 'td' : 'th';
  return `      <tr>${row
    .split(',')
    .map(col => `<${el}>${col.trim().replace(/"/g, '')}</${el}>`).join('')}</tr>`;
}).join(EOL)}
    </table>
  </body>
</html>`;
