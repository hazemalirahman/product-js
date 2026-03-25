function seedDb(db){
  db.run("CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY, name TEXT, description TEXT, quantity INTEGER, price DOUBLE, imageurl TEXT)", [], 
  // error callback
  (err, row) => {
      if (err) {
        console.error(err);
      }},
  // success callback
  () => {
    db.get("SELECT COUNT(*) AS total FROM products", [], (err, row) => {
      if (err) {
        console.error(err);
      }
      const count = row.total
      if(count == 0){
        let products = [
          {id: 1, name: "milk", description: "milk description", quantity: 20, price: 50, imageurl: "/images/milk.jpg"},
          {id: 2, name: "cola", description: "cola description", quantity: 100, price: 20, imageurl: "/images/cola.jpg"},
          {id: 3, name: "honey", description: "honey description", quantity: 210, price: 250, imageurl: "/images/honey.jpg"},
          {id: 4, name: "icecream", description: "icecream description", quantity: 90, price: 35, imageurl: "/images/icecream.jpg"},
          {id: 5, name: "potato", description: "potato description", quantity: 10, price: 20, imageurl: "/images/potato.jpg"},
          {id: 6, name: "rice", description: "rice description", quantity: 200, price: 20, imageurl: "/images/rice.jpg"},
          {id: 7, name: "tomato", description: "tomato description", quantity: 30, price: 35, imageurl: "/images/tomato.jpg"},
          {id: 8, name: "sugar", description: "sugar description", quantity: 10, price: 10, imageurl: "/images/sugar.jpg"},
          {id: 9, name: "water", description: "water description", quantity: 150, price: 15, imageurl: "/images/water.jpg"},
          {id: 10, name: "cucumber", description: "cucumber description", quantity: 25, price: 25, imageurl: "/images/cucumber.jpg"}
        ]
        let command = (i) => `INSERT INTO products(id, name, description, quantity, price, imageurl) VALUES (${i.id}, 
          '${i.name}', '${i.description}', '${i.quantity}', '${i.price}', '${i.imageurl}')`;
        products.forEach(i => db.run(command(i)));
        }
      });

    }
  );
}

module.exports = seedDb;
