const database = require("./database");

function get_all_products() {
  database.connection.query(`select * from products`, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
}

function get_product_by_id(id) {
  //  id = 5
  // select * from products where id = 5;
  database.connection.query(
    `select * from products where id = ${id}`,
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    }
  );
}

function create_new_product(name, price) {
  database.connection.query(
    `insert into products (name, market_price) values ('${name}', '${price}')`,
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Created successfully!");
      }
    }
  );
}

function delete_product_by_id(id) {
    database.connection.query(
      `delete from products where id = ${id}`,
      (error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Deleted the product successfully!");
        }
      }
    );
  }
  
  module.exports = {
    get_all_products,
    get_product_by_id,
    create_new_product,
  };
  