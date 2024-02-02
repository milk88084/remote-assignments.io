const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


app.get('/getData', (req, res) => {
  const number = req.query.number;


  if (!number) {
  
    res.send('Lack of Parameter');
  } else if (isNaN(number)) {
    res.send('Wrong Parameter');
  } else {
    const result = calculateSum(parseInt(number, 10));
    res.send(`${result}`);
  }
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


function calculateSum(n) {
  return (n * (n + 1)) / 2;
}