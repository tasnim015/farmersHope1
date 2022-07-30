const { v4: uuidv4 } = require("uuid");

const customer = require("../models/customer.model");

const getAllUsers = async (req, res) => {
  try {
    const customers = await customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const customer = await customer.findOne({ id: req.params.id });
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newCustomer = new customer({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
      address: req.body.address,
      contactNo: req.body.contactNo,
    });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const customers = await customer.findOne({ id: req.params.id });
    customers.name = req.body.name;
    customers.age = Number(req.body.age);
    customers.address = req.body.address;
    customers.contactNo = req.body.contactNo;
    await customers.save();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    await customer.deleteOne({ id: req.params.id });
    res.status(200).json({ message: "user is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};