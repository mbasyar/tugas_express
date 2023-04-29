const User = require('../models/productModel');

// GET
exports.getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // GET-by-id
  exports.getUserById = async (req, res) => {
    // const cekId = await user.findById(req.params.id);
    // if (!cekId) return res.status(404).json({ message: "data tidak ditemukan" });
    try {
      const users = await User.findById(req.params.id);
      res.json(users);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  
  // POST
  exports.saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
      const saveuser = await user.save();
      res.status(201).json(saveuser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // PATCH-UPDATE
  exports.updateUser = async (req, res) => {
    // const cekId = await user.findById(req.params.id);
    // if (!cekId) return res.status(404).json({ message: "data tidak ditemukan" });
    try {
      const updateUser = await User.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // DELETE
  exports.deleteUser = async (req, res) => {
    // const cekId = await user.findById(req.params.id);
    // if (!cekId) return res.status(404).json({ message: "data tidak ditemukan" });
    try {
      const deletedUser = await User.deleteOne({ _id: req.params.id });
      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };