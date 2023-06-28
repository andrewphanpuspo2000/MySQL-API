import dbSchema from "../config/db.js";

export const createTable = () => {
  const create = dbSchema.query(
    "create table User (name varchar(10),age int(20))"
  );
  create ? console.log("table created") : console.log("fail to create");
};

export const inputData = (name, age) => {
  try {
    const input = dbSchema.query("insert into user(name,age) values (?,?)", [
      name,
      age,
    ]);
    return input;
  } catch (err) {
    console.log(err.message);
  }
};
