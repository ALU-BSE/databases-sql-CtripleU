const mongoose = require('mongoose');
const User = require('./models/user_model.js');
const Product = require('./models/product_model.js');
const Transaction = require('./models/transaction_model.js');

mongoose.connect('mongodb://localhost:27017/techshop', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
});

async function createCollections() {
  await User.createCollection();
  await Product.createCollection();
  await Transaction.createCollection();

  await User.createIndexes({ name: 1 });
}

async function insertSampleData() {
  const users = await User.insertMany([
    { name: "Uchechi Nwankwo", email: "uchechi@example.com", password: "password_123" },
    { name: "Olukorede Adegbeshin", email: "korede@example.com", password: "password_456" },
    { name: "Hassan Dankwada", email: "hassan@example.com", password: "password_789" }
  ]);

  const products = await Product.insertMany([
    { name: "Dress", description: "Cherry red Zara dress", price: 1300, listedBy: users[0]._id },
    { name: "Heels", description: "Black pump heels", price: 400, listedBy: users[1]._id },
    { name: "Jacket", description: "Navy-blue striped jacket", price: 950, listedBy: users[2]._id }
  ]);

  await Transaction.insertMany([
    { buyer: users[0]._id, product: products[0]._id, date: new Date(), quantity: 1 },
    { buyer: users[1]._id, product: products[1]._id, date: new Date(), quantity: 3 },
    { buyer: users[2]._id, product: products[2]._id, date: new Date(), quantity: 1 },
  ]);
}


async function initDatabase() {
  await createCollections();
  await insertSampleData();
  console.log('Database initialized successfully!');
}

initDatabase();