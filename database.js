
const mysql = require("mysql");

const properties = {
  host: "34.126.172.116",
  user: "root",
  password: "fintechsglab",
  port: 3306,
  database: "market",
};

let connection = mysql.createConnection(properties);

connection.connect((error) => {
  if (error) {
    console.error("Connection to MySQL failed! \n" + error);
  } else {
    console.log("Connected to MySQL!");
  }
});


// connection.query(
//     `select * from products`, // mysql query in string format
//     (error, result) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(result);
//       }
//     }
//   );

//   connection.query(
//     `select b.author_id, b.ISBN, sum(p.quantity * b.unit_price) as mostmoney
//     from purchases p 
//     inner join books b
//     on p.book_id = b.ISBN
//     group by b.author_id, b.ISBN 
//     order by  mostmoney desc 
//     limit 1`, // mysql query in string format
//     (error, result1) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(result1);
//       }
//     }
//   );

  module.exports = {
    connection,
  };
  