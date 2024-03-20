const mongoose = require('mongoose');
const User = require('./models/user_model.js');
const Product = require('./models/product_model.js');
const Transaction = require('./models/transaction_model.js');

mongoose.connect('mongodb://localhost:27017/techshop', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
});

async function findProductsByUser(userId) {
  const products = await Product.find({ listedBy: userId });
  console.log(`Products listed by user ${userId}:`, products);
}

async function findTotalSpentByUser(userId) {
    const totalSpent = await Transaction.aggregate([
      { $match: { buyer: new mongoose.Types.ObjectId(userId) } },
      { $lookup: { from: "products", localField: "product", foreignField: "_id", as: "productDetails" } },
      { $unwind: "$productDetails" },
      { $group: { _id: null, totalSpent: { $sum: { $multiply: ["$quantity", "$productDetails.price"] } } } }
    ]);
    console.log(`Total amount spent by user ${userId}:`, totalSpent[0].totalSpent);
}

async function findTopProducts() {
    const topProducts = await Transaction.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'product',
          foreignField: '_id',
          as: 'productDetails'
        }
      },
      { $unwind: '$productDetails' },
      {
        $group: {
          _id: '$product',
          product: { $first: '$productDetails' },
          totalQuantity: { $sum: '$quantity' }
        }
      },
      { $sort: { totalQuantity: -1 } },
      { $limit: 5 }
    ]);
  
    console.log('Top 5 most popular products:', topProducts);
}

async function runQueries() {
  const userId = '65fb09ce953fffa38845239d';

  await findProductsByUser(userId);
  await findTotalSpentByUser(userId);
  await findTopProducts();
}

runQueries();