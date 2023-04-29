const express = require('express');
const router = express.Router();
const { getUsers, getUserById, saveUser, updateUser, deleteUser } = require('../controllers/productController')

//get
router.get("/get", getUsers)

//get by id
router.get("/get/:id", getUserById)

//post
router.post("/post", saveUser)

//patch
router.patch("/patch/:id", updateUser)

//dellete
router.delete("/delete/:id", deleteUser)

module.exports = router;