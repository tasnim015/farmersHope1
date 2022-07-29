const { v4: uuidv4 } = require("uuid");

const Farmer = require("../models/farmer.model");

const getAllUsers = async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.status(200).json(farmers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const farmer = await Farmer.findOne({ id: req.params.id });
    res.status(200).json(farmer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newFarmer = new Farmer({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
      address: req.body.address,
      contactNo: req.body.contactNo,
    });
    await newFarmer.save();
    res.status(201).json(newFarmer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const farmer = await Farmer.findOne({ id: req.params.id });
    farmer.name = req.body.name;
    farmer.age = Number(req.body.age);
    farmer.address = req.body.address;
    farmer.contactNo = req.body.contactNo;
    await farmer.save();
    res.status(200).json(farmer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    await Farmer.deleteOne({ id: req.params.id });
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