const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('HOLA MI SERVER EN EXPRESS');
})


app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Producto 1',
      price: 1000
    },
    {
      name: 'producto 2',
      price: 2000
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
  name: 'Product 2',
  price: 2000
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () =>{
  console.log('Mi port' + port);
});
