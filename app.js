const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

  
  app.get('/printMatrixAfterRotate',(req,res)=>{
      var rotateClockwise = function(matrix) {
          // reverse the rows
          matrix = matrix.reverse();
          // swap the symmetric elements
          for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < i; j++) {
              var temp = matrix[i][j];
              matrix[i][j] = matrix[j][i];
              matrix[j][i] = temp;
            }
          }
        };
  
        var rotateCounterClockwise = function(matrix) {
          // reverse the individual rows
          matrix = matrix.map(function(row) {
            return row.reverse();
          });
          // swap the symmetric elements
          for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < i; j++) {
              var temp = matrix[i][j];
              matrix[i][j] = matrix[j][i];
              matrix[j][i] = temp;
            }
          }
        };
        var original = [
          [0, 16, 255],
          [8, 128, 32],
          [0, 0, 0]
        ];
        
        var clockwise = JSON.parse(JSON.stringify(original)); 
        console.log(clockwise);
        rotateClockwise(clockwise);
        
        var counterClockwise = JSON.parse(JSON.stringify(original)); 
        rotateCounterClockwise(counterClockwise);
  
        var textContent =
        'Original:\n\n' + original.join('\n') + '\n\n' +
        'Clockwise:\n\n' + clockwise.join('\n') + '\n\n' +
        'Counter-clockwise:\n\n' + counterClockwise.join('\n');
        console.log(textContent)

        res.send("Please Check in console")
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))