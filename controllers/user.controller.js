const db = require("../config/db");
const queryGenerate = require("../helpers/query.generate");

const findAll = (req, res) => {
  let { limit, offset } = req.query;

  limit = limit ? limit : 10;
  offset = offset ? offset : 1;

  db.query(
    `select * from user limit ${limit} offset ${(offset - 1) * limit}`,
    (err, result) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.status(200).send({ data: result });
    }
  );
};

const findOne = (req, res) => {
  let { id } = req.params;
  db.query(`select * from user where id=?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    res.status(200).send({ data: result });
  });
};

const create = (req, res) => {
  let { first_name, last_name, phone_number, email, password } = req.body;
  db.query(
    `insert into user (first_name, last_name, phone_number, email, password) values (?, ?, ?, ?, ?)`,
    [first_name, last_name, phone_number, email, password],
    (err, result) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.status(200).send({ data: result });
    }
  );
};

const update = (req, res) => {
  let data = req.body;
  let { id } = req.params;
  let values = Object.values(data);

  db.query(
    `update user set ${queryGenerate(Object.keys(data))} where id =?`,
    [...values, id],
    (err, result) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.status(200).send({ data: result });
    }
  );
};

const remove = (req, res) => {
  let { id } = req.params;

  db.query(`delete from user where id=?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    res.status(200).send({ data: result });
  });
};

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
};
