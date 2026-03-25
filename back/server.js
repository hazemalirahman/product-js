const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const seedDb = require('./seed');

const port = 3000;
const app = express();
app.use(express.static('public'));
app.use(express.json());

const db = new sqlite3.Database('./database.db');
seedDb(db);



// 3. GET route to fetch all products
app.get('/products', (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 3. GET route to fetch all products
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  db.get("SELECT * FROM products WHERE id = ?", [productId], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    if (!row) {
      return res.status(404).json({ message: "product not found" });
    }

    res.json(row);
  });
});

// 4. POST route to add a product
app.post('/products', (req, res) => {
  const { name } = req.body;
  db.run("INSERT INTO products(name) VALUES (?)", [name], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID }); // 'this.lastID' returns the new row's ID
  });
});

app.listen(port, () => console.log('Server running on http://localhost:3000'));


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
//
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
//
