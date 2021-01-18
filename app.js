const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Salve salve família');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('READY');
});
