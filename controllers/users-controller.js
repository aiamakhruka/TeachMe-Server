const knex = require("knex")(require("../knexfile"));

const getUsers = (_req, res) => {
  knex
    .from("users")
    .select("users.id", "users.username", "users.email", "users.role")
    // .join("warehouses", "inventories.warehouse_id", "warehouses.id")
    .then((show) => {
      res.status(200).json(show);
    })
    .catch((error) => {
      res.status(500).json({
        message: `Unable to retrieve users data. Error: ${error}`,
      });
    });
};

const findUser = (req, res) => {
  console.log(req.body)
  knex("users")
      .select(
      "users.id",
      "users.username",
      "users.email",
      "users.role",
    )
    .where({ 
      username:req.body.username,
      password:req.body.password,
    })
    .then((userFound) => {
      if (userFound.length === 0) {
        return res.status(404).json({
          message: `user with ID ${req.params.name} not found`,
        });
      }
      res.json(userFound[0]);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrive user with ID: ${req.params.name}`,
      });
    });
};

const addUser = (req, res) => {
  knex("users")
    .insert({
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role,
    })
    .then((result) => {
      return knex("users")
        .where({ id: result[0] })
        .then((createdUser) => res.status(201).json(createdUser));
    })
    .catch((error) => {
      res.status(500).json({
        message: `Unable to create new user`,
      });
    });
};
module.exports = {
  getUsers,
  findUser,
    addUser,
};
