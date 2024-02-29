// MySql
// MySql Default port 3306
const mysql = require("mysql");
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "nodejsmysql",
};

//Connection
const DB = mysql.createPool(dbConfig);

module.exports = (query) => {
  return new Promise((resolve, reject) => {
    DB.getConnection((err, sql) => {
      if (err) {
        console.log("Database Error: ", err)
        reject(err);
      } else {
        sql.query(query, (err, results) => {
          if (err) {
            console.log("Query Error: ", err)
            reject(err);
          } else {
            resolve(results);
          }

          sql.release()
        });
      }
    });
  });
};

//   //Check if Connected
//   DB.connect((error) => {
//     if (error) {
//       console.log("error: ", error);
//     } else {
//       // Parameters: error, results, field
//       DB.query(`SELECT * FROM accounts`, (error, results, field) => {
//         console.log("error: ", error);
//         console.log("results: ", results);
//         console.log("field: ", field);
//       });
//     }
//   });
