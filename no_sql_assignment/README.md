# TechShop

TechShop is an online marketplace for tech products where users can buy and sell various items. This project implements a NoSQL database using MongoDB to store and manage data for TechShop. The database stores information about users, products, and transactions.

# Project Structure
No_sql_assignment/
├── db.js
├── models/
│   ├── user.model.js
│   ├── product.model.js
│   └── transaction.model.js
├── queries.js
├── package.json
└── README.md

- db.js: Handles the database connection, creates collections, and inserts sample data.
- models/: Contains the Mongoose schema definitions for the Users, Products, and Transactions collections.
- queries.js: Contains the advanced MongoDB queries for various operations.
- package.json: Defines the project dependencies.
- README.md: This file, containing the project documentation.

## Database Schema

The database consists of three collections:

- **Users**
    Stores user information such as name, email (unique), and password.

- **Products**
    Stores product details like name, description, price, and the ID of the user who listed the product.

- **Transactions**
    Records transaction details, including the ID of the buyer, the ID of the product, the date of the transaction, and the quantity purchased.


## Setting up the Database

1. Make sure you have MongoDB installed and running on your system.

2. Clone the repository:

`git clone  clone https://github.com/your-username/techshop.git`

3. Navigate to the project directory:
`cd no_sql_assignment`

4. Install the required dependencies:
`npm install`

5. Run the db.js file to create the collections and insert sample data:
`node db.js`

6. Run the queries.js file to execute the queries:
`node queries.js`


## Database Verification

To verify that the data was inserted correctly and to check the contents of the collections, you can use the MongoDB shell or a GUI client like MongoDB Compass.

1. Open the MongoDB shell by running the following command:
`mongosh`

2. Switch to the `techshop` database:
`use techshop`

3. Run the following commands to view the documents in each collection:
`db.users.find().pretty()`
`db.products.find().pretty()`
`db.transactions.find().pretty()`