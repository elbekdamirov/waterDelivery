const db = require("../config/db");
const queryGenerate = require("../helpers/query.generate");

const findAll = (req, res) => {
  let { limit, offset } = req.query;

  limit = limit ? limit : 10;
  offset = offset ? offset : 1;

  db.query(
    `select * from deliver limit ${limit} offset ${(offset - 1) * limit}`,
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
  db.query(`select * from deliver where id=?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    res.status(200).send({ data: result });
  });
};

const create = (req, res) => {
  let { first_name, last_name, phone_number, car_model, current_location } =
    req.body;
  db.query(
    `insert into deliver ( first_name, last_name, phone_number, car_model, current_location) values (?, ?, ?, ?, ?)`,
    [first_name, last_name, phone_number, car_model, current_location],
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
    `update deliver set ${queryGenerate(Object.keys(data))} where id =?`,
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

  db.query(`delete from deliver where id=?`, [id], (err, result) => {
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
