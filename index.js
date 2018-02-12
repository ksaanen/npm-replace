const fs = require('fs');

exports.replace = function (input, expr1, expr2, output = input) {
  fs.readFile(input, 'utf8', function (error, data) {
    if (error) {
      return console.log(error);
    }

    let result = data.replace(expr1, expr2);

    fs.writeFile(output, result, 'utf8', function (error) {
      if (error) return console.log(error);
    });
  });
}