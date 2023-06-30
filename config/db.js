import mysql from "mysql2";

const dbConnect = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "Malang11#",
    database: "api_test",
  })
  .promise();

export default dbConnect;
