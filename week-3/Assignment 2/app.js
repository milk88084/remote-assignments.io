const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

// 設置路由處理 GET 請求
app.get('/getData', (req, res) => {
  // 取得 number 參數
  const number = req.query.number;

  // 檢查 number 是否存在
  if (!number) {
    // Case 1: Lack of Parameter
    res.send('Lack of Parameter');
  } else if (isNaN(number)) {
    // Case 2: Wrong Parameter (not a number)
    res.send('Wrong Parameter');
  } else if (number === "POSITIVE_INTEGER") {
    res.send(`${result}+POSITIVE_INTEGER`);
  }else {
    // Case 3: Calculate the sum from 1 to number
    const result = calculateSum(parseInt(number, 10));
    res.send(`${result}`);
  }
    // 定義計算總和的函數
    function calculateSum(n) {
      return (n * (n + 1)) / 2;
    }

});

// 開始監聽端口
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

