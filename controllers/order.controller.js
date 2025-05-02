const db = require("../config/db");
const queryGenerate = require("../helpers/query.generate");

const findAll = (req, res) => {
  let { limit, offset } = req.query;

  limit = limit ? limit : 10;
  offset = offset ? offset : 1;

  db.query(
    `select * from orders limit ${limit} offset ${(offset - 1) * limit}`,
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
  db.query(`select * from orders where id=?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    res.status(200).send({ data: result });
  });
};

const create = (req, res) => {
  let {
    user_id,
    deliver_id,
    water_count,
    total_price,
    date,
    promised_time,
    status,
  } = req.body;
  db.query(
    `insert into orders ( user_id, deliver_id, water_count, total_price, date, promised_time, status) values (?, ?, ?, ?, ?, ?, ?)`,
    [
      user_id,
      deliver_id,
      water_count,
      total_price,
      date,
      promised_time,
      status,
    ],
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
    `update orders set ${queryGenerate(Object.keys(data))} where id =?`,
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

  db.query(`delete from orders where id=?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    res.status(200).send({ data: result });
  });
};

const getOrderByDate = (req, res) => {
  let { start_date, end_date } = req.body;

  db.query(
    `SELECT DISTINCT u.id, u.first_name, u.last_name, u.phone_number, u.email
    FROM orders o
    JOIN User u ON o.user_id = u.id
    WHERE o.date BETWEEN '${start_date}' AND '${end_date}'`,
    (error, result) => {
      if (error) {
        console.log(`Error get orders`, error);
        return res.status(500).send({ message: "Serverda xatolik" });
      }
      res.send(result);
    }
  );
};

const getLastOrders = (req, res) => {
  let { name } = req.body;

  db.query(
    `SELECT o.*
    FROM orders o
    JOIN User u ON o.user_id = u.id
    WHERE u.first_name = '${name}'
    AND o.date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH);`,
    (error, result) => {
      if (error) {
        console.log(`Error get orders`, error);
        return res.status(500).send({ message: "Serverda xatolik" });
      }
      res.send(result);
    }
  );
};

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
  getOrderByDate,
  getLastOrders,
};
